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
  /* height: 100vh; */
  background-color: #e6ecf0;
  
}
</style>
