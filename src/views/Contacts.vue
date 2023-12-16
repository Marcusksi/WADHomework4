<template>
    <div class="form">
        <div class="info">
            <h3>Contact</h3>
            <p>Address: Narva mnt 18, Tartu, Estonia</p>
            <p>Email: info@ut.ee</p>
            <p>Phone: +123456789</p>
        </div>
    </div>
</template>

<script>

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
.info > h3:after {
    content:' ';
    display:block;
    border:1px solid black;
}
.info > p {
    padding-left: 10px;

}
</style>