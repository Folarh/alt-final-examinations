<template>
<nav class="navbar">
   <div class="logo">
      <h3>4larh</h3>
   </div>
   <div class="nav-links">
 <router-link :to="{name : 'HomePage'}">Home</router-link>
  <router-link :to="{name : 'RepositoryPage'}">Repository</router-link>
   </div>
   
</nav>
</template>

<script>
export default {

}
</script>

<style>
.navbar{
   display: flex;
   justify-content: space-around;
   align-items: center;
   border-bottom: 2px solid black;
   background-color: steelblue;
   color: #f1f1f1;
   height: 100px;
}
 .navbar a{
    font-weight: bold;
    color: black;
    margin: 10px;
    font-size:1.5rem;
    text-decoration: none;
 }



 .navbar a:hover{
   color: white;
   border-bottom: 2px solid grey;
 }

 .logo h3{
   color: red;
   font-size: 2rem;
 }
</style>