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
   background-color: #50b7f5;
   color: #f1f1f1;
   height: 100px;
}
 .navbar a{
    font-weight: bold;
    color: white;
    margin: 10px;
    font-size:1.5rem;
    text-decoration: none;
 }



 .navbar a:hover{
   color: steelblue;
   border-bottom: 1px solid grey;
 }

 .logo h3{
   color: #f1f1f1;
   font-size: 2rem;
 }
</style>