<template>
  <div class="form">
    <h3>LogIn</h3>
    <div class="formdiv"> 
    <div class="subdiv">
      <label for="email">Email:</label>
      <input type="email" name="email"  required v-model="email" placeholder="Email">
    </div>
    <div class="subdiv">
      <label for="password">Password:</label>
      <input type="password" name="password" required v-model="password" placeholder="Password">
    </div>
    </div>
    <div class="err" v-if="errMsg">{{errMsg}} </div>
    <div class="container">
      <button @click="LogIn"  class="center">LogIn</button>
      <p>Or</p>
      <button @click='this.$router.push("/api/signup")' class="center">Signup</button>
    </div>
  </div>
</template>

<script>
export default {
name: "LogIn", 
data: function() {
    return {
   email: '',
   password: '',
   errMsg: '',
  }
  },
  methods: {
LogIn() {
      var data = {
        email: this.email,
        password: this.password
      };
      if (this.email === '' || this.password === '') {
        this.errMsg = "Fill in all the fields"
      }
      else if (this.email !== '' || this.password !== '') {
        fetch("http://localhost:3000/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
            credentials: 'include', 
            body: JSON.stringify(data),
        })
        .then((response) => response.json())
        .then((data) => {
        console.log(data);
        location.assign("/");

        })
        .catch((e) => {
          console.log(e);
          console.log("error");
        });
      }
    },
  }, 
  }
</script>

<style scoped>
.form {
  max-width: 420px;
  margin: 30px auto;
  background-color: #8FC1E3;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}
h3 {
  text-align: center;
  color: #2c3e50;
}

label {
  color: #2c3e50;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.8em;
  letter-spacing: 1px;
  font-weight: bold;
}
input {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid white;
  color: #2c3e50;
}
button {
  background-color: #496342;
  border: 0;
  padding: 10px 20px;
  margin: 20px 20px 20px 20px;
  color: white;
  border-radius: 20px;
  align-items: center;
  text-align: center;
}
button:hover{
    opacity: 0.9;
    cursor:pointer;
    background-color: #7a9673;
}
.center {
  margin: auto;
  border: 0;
  padding: 10px 20px;
  margin-top: 20px;
  width: 30%; 
}
.container {
  display: flex;
  justify-content: center;
}
p {
  padding-top: 10px;
}
.subdiv {
  display: flex;
  flex-direction: row;
  padding: 10px;
}
input {
  text-align: center;
  border-radius: 10px;
  margin-left: 30px;
  width: 300px;
}
.formdiv {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
}
.err {
  text-align: end;
}
</style>