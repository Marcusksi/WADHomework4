<template>
  <div class="header">
    <ul class="content">
      <li class="nav-links">
        <nav>
          <router-link to="/">Home</router-link>
          <a class="mid"> | </a>
          <router-link to="/api/contacts">Contacts</router-link>
        </nav>
      </li>
    </ul>
  </div>
  <router-view />

  <footer class="footer">
    <div class="container">
      <div class="footer-bottom">
        <p>&copy; ඞ 2003-2023 Team AM. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "App",
   methods: {
   
   },
}; 

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

button{
  margin-top: 30px;
  border-radius: 36px;
  background: #FEE996;
  border:0;
  font-weight: 700;
  font-size: 0.8em;
  display: block;
  padding: 10px 16px;
  letter-spacing: 2px;
}
.container {
  display: flex;
  justify-content: center;
}
.footer {
    color: #F7F9FB;
    background-color: #687864;
    border-radius: 15px;
    width: 100%;
    padding-bottom: 7px;
    padding-top: 5px;
    text-align: center;
    position: relative;
    bottom: 0;
  }

.header {
  color: #F7F9FB;
  background-color: #687864;
  border-radius: 15px;
  width: 100%;
  padding-bottom: 7px;
  padding-top: 5px;
}
.content{
  padding-bottom: 10px;
  padding-top: 15px;
  list-style: none;
}
.nav-links{
  margin: 10px;
}
nav{
  text-align: center;
  color: #2c3e50;
  font-weight: bold;
  text-decoration: none;
  padding:0px;
}
nav a {
  color: #2c3e50;
  font-weight: bold;
  text-decoration: none;
  font-size: 120%;
}
nav .mid{
  font-size: 140%;
  font-weight: bold;
}

nav a.router-link-exact-active {
  color: #42b94a;
  text-decoration: none;
}
</style>
