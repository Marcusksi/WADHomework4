<template>
  <div class="form">
    <h3>SignUp</h3>
    <div class="formdiv">
      <div class="subdiv">
        <label for="email">Email:</label>
        <input type="email" name="email"  required v-model="email" placeholder="Email">
      </div>
    <div v-if="emailExists">{{emailExists}} </div>
      <div class="subdiv">
        <label for="password">Password:</label>
        <input type="password" name="password" required v-model="password" placeholder="Password">
      </div>
    <div v-if="errMsg">{{errMsg}} </div>
    </div>
    <button @click="SignUp" class="SignUp">SignUp</button>
  </div>
</template>

<script>
export default {
name: "SignUp", 
data: function() {
    return {
   email: '',
   password: '',
   emailExists: '',
   errMsg: '',
  }
  },
watch: {
    password(value) {
      this.password = value;
      this.validatePassword(value);
    }
  },
  methods: {
validatePassword(value) {
      if (value.length < 8 || value.length >= 16 || !/[A-Z]/.test(value) || !/[0-9]/.test(value)) {
        this.errMsg = "Password must be at least 8 characters  and less than 16 characters, it must include a capital letter and at least one number"
      }else{
      this.errMsg = ''
      }
    },
SignUp() {
      var data = {
        email: this.email,
        password: this.password,
      };
      fetch("http://localhost:3000/auth/signup", {
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
      this.$router.push("/signup/home");
      this.emailExists = "Account with email '" + this.email +"' already exists";
      })
      .catch((e) => {
        console.log(e);
        console.log("error");
      });
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
  color: white;
  border-radius: 20px;
  align-items: center;
  text-align: center;
  display: block;
  margin: 0 auto;
  margin-top: 20px;
}
button:hover{
    opacity: 0.9;
    cursor:pointer;
    background-color: #7a9673;
}
div {
  padding: 10px 20px;
  margin-top: 20px;
}

.subdiv {
  display: flex;
  flex-direction: row;
  padding: 0px;
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
</style>