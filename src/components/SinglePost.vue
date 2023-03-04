<template>
  <div class="post">
    <h3>{{post.name}}</h3>
     <h4>watchers :{{post.watchers}}</h4>
      <h5> visibility:{{post.visibility}}</h5>
     
  </div>
</template>

<script>
export default {
props: ['post']
}
</script>


<style>
.post{
    width: 200px;
    height: 100px;
    background-color: blue;
    border: 1px solid grey;
    margin-top: 5px;
}

.post h4{
    background-color: white;
}

</style>