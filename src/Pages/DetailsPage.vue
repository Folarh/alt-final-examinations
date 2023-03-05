<template>
  <div v-if="error" class="error">{{error}}</div>
  <div v-if="post" class="post">
    <h3>{{post.name}}</h3>
     <h3>{{post.created_at}}</h3>
  </div>
</template>

<script>
import getPost from '../composables/getPost'
export default {
props: ['id'],
setup(props){
const {post, error, load}=getPost(props.id)

load()

return {post, error}
}
}
</script>

<style>

.error{
    color: red;
    font-size: 2rem;
}

</style>