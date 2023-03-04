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
    border: 2px solid green;
    padding: 20px;
}

.repository h1{
  text-align: center;
  color: steelblue;
}
</style>
