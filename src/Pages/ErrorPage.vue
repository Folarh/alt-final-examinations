<template>
  <div class="not-found">
    <h1> Error 404</h1>
    <h3>Ooops!!</h3>
    <p>THIS PAGE DOESN'T EXIST</p>

    <div class="not-found-link">
      <router-link :to="{ name: 'HomePage' }">GO TO HOME</router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.not-found {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
}
.not-found h1 {
  font-size: 4rem;
  font-weight: bold;
  letter-spacing: 5px;
  color: black;
}
.not-found h3 {
  font-size: 30px;
  color: #e7dbdb;
}
.not-found p {
  margin: 40px 0;
  color: crimson;
  font-weight: bold;
}
.not-found-link {
  margin: 20px 0;
}
.not-found-link a {
  text-decoration: none;
  color: #fff;
  border: none;
  border-radius: 6px;
  background-color: steelblue;
  padding: 20px;
}
.not-found-link a:hover {
  background-color: black;
  color: white;
}
</style>