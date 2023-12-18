<template>
  <div class="AllPosts">
    <button @click="Logout" class="btn">Logout</button>
    <div class="box" v-for="post in posts" :key="post.id">
      <a class= 'singlepost' :href="'/api/apost/' + post.id">
        <ul class="post">
          <li><p class="date">{{post.date}}</p></li>
          <p>{{post.body}}</p> 
        </ul> 
      </a> 
    </div>
    <div>
      <button @click="ToAddPost" class="btn" >Add post</button>
      <button @click="DeleteAllPosts" class="btn">Delete all</button>
    </div>
  </div>
</template>


<script>
export default {
  name: "AllPosts",
  data() {
    return {
      posts: [],
    };
  },
  methods: {
    //logout method
    Logout() {
      fetch("http://localhost:3000/auth/logout", {
          credentials: 'include', 
      })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        console.log('jwt removed');
        
        this.$router.push("/api/login");
      })
      .catch((e) => {
        console.log(e);
        console.log("error logout");
      });
    },

    fetchPosts() {
      fetch(`http://localhost:3000/api/posts/`)
        .then((response) => response.json())
        .then((data) => (this.posts = data))
        .catch((err) => console.log(err.message));
    },


    ToAddPost() {
      this.$router.push("/api/addpost");
    },

    DeleteAllPosts() {
      fetch(`http://localhost:3000/api/posts/`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      })
        .then((response) => {
          console.log(response.data);
          window.location.reload();
        })
        .catch((e) => {
          console.log(e);
        });
    }

  },
  mounted() {
    this.fetchPosts();
    console.log("mounted");
  },
};
</script>

<style scoped>
ul {
    list-style: none;
}

.box {
  display: flex;
}

.singlepost {
  display: block;
  height: 100%;
  width: 100%;
  text-decoration: none;
  padding: 10px;
  background-color: #8FC1E3;
  margin-top: 20px;
  margin-bottom: 20px;
  border-radius: 15px;
  text-align: left;
}

p {
  color:black;
}

.date {
  text-align: right;
  font-size: 20px;
  margin-right: 20px;
}



  
@keyframes likeUpDown {
    from, to {
        transform: translateY(-20px);
      }
    50% {
        transform: translateY(20px);
    }
}

@media (min-width: 800px) {
    .box {
        margin-left: 0%;
        margin-right: 0%;
    }
}

@media (min-width: 1000px) {
    .box {
        margin-left: 20%;
        margin-right: 20%;
    }
}

li ~ p {
    font-size: 22px;
    margin-top: 50px;
    margin-bottom: 30px;
    margin-right: 10px;
}

.btn{
    background-color: #496342;
    color: white;
    margin: 10px;
    margin-top: 20px;
    padding: 10px 30px;
    border: none;
    text-align: center;
    text-decoration: none;
    display: inline-block;
}
.btn:hover{
    opacity: 0.9;
    cursor:pointer;
    background-color: #7a9673;
}

</style>