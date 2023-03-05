<template>
<div class="repository">
  <h1>Folarh's Repository</h1>
  <div v-if="error">{{error}}</div>
   <div v-if="posts.length">
<PostList :posts="posts"/>
   </div>
   <div v-else>loading...</div>
 
</div>
  
</template>

<script>
import PostList from '../components/PostList.vue'
import getData from '../composables/getData'

export default {
name: 'RepositoryPage',
components: {PostList},
setup(){
const {posts, error, load}=getData()


load()
return{posts,error}
}
}
</script>

<style>
.repository{
    max-width: 1300px;
    margin: 0 auto;
    box-shadow: 60px -16px rgb(32, 32, 32);
    border-radius: 20px;
     /* box-shadow: 12px 12px 2px 1px  silver; */
    /* border: 2px solid blue; */
    padding: 20px;
    color: white;
}

.repository h1{
  text-align: center;
  color: whitesmoke;
  
}
</style>
