<template>
  <div class="post">
    <router-link :to="{name: 'DetailsPage', params:{id: post.full_name}}">
      <h3>{{post.name}}</h3>
    </router-link>
     <h4>watchers :{{post.watchers}}</h4>
      <h5> visibility:{{post.visibility}}</h5>
     
  </div>
  
</template>

<script>

export default {
props: ['post'],
}
</script>


<style>
.post{
    width: 200px;
    height: 100px;
    margin-top: 20px;
    color: white;
    box-shadow: 60px -16px rgb(175, 175, 175);
   border: 1px solid black;
   padding: 20px;
   border-radius:20px;
}

.post h4{
    background-color: grey;
    border-radius:10px;
}
.post h5{
    color: steelblue;
}

.post a{
  color: orange;
}
.pagination{
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>