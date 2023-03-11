<template>
  <div class="singlepost">
    <router-link :to="{name: 'DetailsPage', params:{name: post.name}}">
      <h3>{{post.name}}</h3>
    </router-link>
     <h4>Watchers :{{post.watchers}}</h4>
      <h5> Visibility:{{post.visibility}}</h5>
       <h5> User Id:{{post.id}}</h5>
     
  </div>
  
</template>

<script>

export default {
props: ['post'],
}
</script>


<style>
.singlepost{
    margin-top: 20px;
    color: white;
   background: whitesmoke;
   padding: 20px;
   border-radius:20px;
}

.singlepost h4{
    background-color: grey;
    border-radius:10px;
    width: 40%;
}
.singlepost h5{
    color: orange;
}

.singlepost a{
  color: #50b7f5;
}
.pagination{
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>