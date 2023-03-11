<template>
<div class="repository">
  <h1>Folarh's Repository</h1>
   <div>
    <router-view></router-view>
   </div>
  <div v-if="error" class="error">{{error}}</div>
   <div v-if="posts.length" class="post">
<PostList :posts="posts"/>
 
   </div>
   <div v-else class="load">
  <SpinnerPage/>
    </div>
   
</div>


</template>

<script>
import SpinnerPage from "../components/SpinnerPage.vue";
import PostList from '../components/PostList.vue'
import getData from '../composables/getData'


export default {
name: 'RepositoryPage',
components: {PostList, SpinnerPage},
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
    margin-top: 20px;
    border-radius: 20px;
    padding: 20px;
    color: white; 
  
    
}

.repository h1{
  text-align: center;
  color: steelblue;
  
}

.error{
  color:#50b7f5;
}

.load{
  color:red;
}

</style>
