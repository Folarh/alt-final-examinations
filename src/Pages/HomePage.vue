<template>
  <div class="homepage">
 <div class="welcome">
  <h1>Welcome to my page</h1>
  <h3>To view all my repositories, click the Link below</h3>
  <div class="link">
     <router-link :to="{name : 'RepositoryPage'}">Repository</router-link>
  </div>
  <!-- <div class="names">
<div class="name">T</div>
<div class="name">A</div>
<div class="name">I</div>
<div class="name">W</div>
<div class="name">O</div>
  </div>
    <div class="names">
<div class="surname">O</div>
<div class="surname">J</div>
<div class="surname">O</div>

  </div> -->
  
 </div>
 
  </div>
</template>

<script>
export default {

}
</script>

<style>
.homepage{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  height: 700px;
  /* margin-top: 20px; */
color: white;
align-content: center;
}
.welcome{
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 50px;
   box-shadow: 60px -16px rgb(240, 237, 237);
   border: 1px solid black;
  padding: 30px;
   border-radius: 20px;
}

.welcome h1{
  font-size: 3rem;
  font-weight:900 ;
  color: orange;
}

.welcome h3{
  color: silver;
  margin-top: 20px;
  text-align: center;
}
.link{
  display: flex;
  justify-content: center;
  margin-top: 30px;
}
.link a{
color: steelblue;
font-size: 3rem;
}

.names{
display: flex;
justify-content: space-evenly;
margin-top: 30px;
padding: 20px;
align-items: center;
}

.name{
  width: 50px;
  color: green;
  font-size: 2rem;
  font-weight: 900;
  border: 1px solid silver;
  text-align: center;
  margin-right: 5px;
  
}

.surname{
  width: 50px;
  color: white;
  font-size: 2rem;
  font-weight: 900;
  border: 1px solid silver;
  text-align: center;
  margin-right: 5px;
  
}
</style>