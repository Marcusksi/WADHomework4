<template>
  <div class="form">
    <h3>Add Post</h3>
    <div class="bodyDiv">
      <div class="leftFlex">
        <label for="body">Body</label>
      </div>
      <div class="rightFlex">
        <input name="body" type="text" id="body" required v-model="post.body" placeholder="body"/>
      </div>
    </div>
    <button @click="addPost" class="btn">Add</button>
  </div>
</template>

<script>
export default {
  name: "AddPost",
  data() {
    return {
      post: {
        date: "",
        body: "",
      },
    };
  },
  methods: {
    addPost() {
      let dateParts = new Date().toDateString().split(" ");
      var data = {
        date: dateParts[1] + ' ' + dateParts[2] + ', ' + dateParts[3],
        body: this.post.body,
      };
      fetch("http://localhost:3000/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
      .then((response) => {
        console.log(response.data);
        this.$router.push("/");
      })
      .catch((e) => {
        console.log(e);
        console.log("error");
      });
    },
  },
};
</script>

<style scoped>
.form {
  max-width: 420px;
  margin: 30px auto;
  background: #8FC1E3;
  text-align: left;
  align-items: center;
  display: flex;
  flex-flow: wrap;
  flex-direction: column;
  padding: 40px;
  padding-top: 20px;
  padding-bottom: 10px;
  border-radius: 10px;
}
h3 {
  font-size: 24px;
  text-align: center;
  color: black;
  font-weight: 300;
}

.bodyDiv {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 20px;
}

.leftFlex {
  display: flex;
  flex-direction: column;
  flex: 30%;
  text-align: center;
  align-items: center;
  justify-content: center;
}

.rightFlex {
  display: flex;
  flex-direction: column;
  flex: 70%;
}

label {
  color: rgb(0, 0, 0);
  letter-spacing: 1px;
  font-weight: bold;
  align-self: center;
  justify-self: center;
  font-size: 20px;
  font-weight: 400;
}
input {
  display: block;
  width: 100%;
  border: none;
  border-radius: 10px;
  color: rgb(0, 0, 0);
  line-height: 40px;
  font-size: 20px;
  text-align: center;
}

::placeholder {
   text-align: center; 
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