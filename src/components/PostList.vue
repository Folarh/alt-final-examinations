<template>
  <div class="post-list">
<div v-for="post in paginatedData" :key="post.id">
    <SinglePost :post="post"/>
    </div>

     <div class="pagination">
      <button @click="backPage">prev</button>
      <button
        v-for="item in Math.ceil(posts.length / perPage)"
        :key="item"
        @click="() => goToPage(item)"
      >
        {{ item }}
      </button>

      <button @click="nextPage">next</button>
    </div>
   </div>
  
</template>

<script>
import myPagination from "../composables/myPagination";
import SinglePost from  '../components/SinglePost.vue'
export default {
    props: ['posts'],
    components: {SinglePost},
    setup(props){
   const { paginatedData, perPage, page, nextPage, backPage, goToPage } =
      myPagination(props.posts);
    return { paginatedData, perPage, page, nextPage, backPage, goToPage };
    }

}
</script>

<style>

.post-list{
  justify-content: center;
  align-items: center;
  justify-self: center;
  padding: 40px;
}
.pagination {
  display: flex;
  /* flex-wrap: wrap; */
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin: 40px auto;
}
.pagination button {
  cursor: pointer;
  width: 50px;
  border: none;
  outline: none;
  border-radius: 6px;
  color:  grey;
}
.pagination button:hover {
  background-color: #50b7f5;;
  color: white;
}

</style>