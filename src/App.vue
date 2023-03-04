<template>
<NavBar/>

 <router-view/>

</template>

<script>
import NavBar from "./components/NavBar.vue"


export default {
  name: 'App',
  components: {NavBar}
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
#app {
  /* max-width: 1300px;
   margin: 0 auto; */
  height: 100vh;
  
  
}
</style>
