<template>
  <div class="repo-details">
    <h1> Details Page</h1>

    <div v-if="error" class="error">{{ error }}</div>

    <div v-if="repo">
      <div class="repo-details-info">
        <label>Name</label>
        <h3>{{ repo.name }}</h3>
      </div>

      <div class="repo-details-info">
        <label>Description</label>
        <h5>{{ repo.description }}</h5>
      </div>

      <div class="repo-details-info">
        <label>ID</label>
        <h5>{{ repo.id }}</h5>
      </div>

      <div class="repo-details-info">
        <label>Owner</label>
        <h5>{{ repo.owner.login }}</h5>
      </div>

      <div class="repo-details-info">
        <label>Branch</label>
        <h5>{{ repo.default_branch }}</h5>
      </div>

      <div class="repo-details-info">
        <label>Visiblity</label>
        <h5>{{ repo.visibility }}</h5>
      </div>
    </div>

    <div v-else>
      <SpinnerPage />
    </div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import getPost from "../composables/getPost";
import SpinnerPage from "../components/SpinnerPage.vue";
export default {
  props: ["name"],
  components: { SpinnerPage },
  setup() {
    const route = useRoute();
    const { repo, error, load } = getPost(route.params.name);
    
    load();
    return { repo, error };
  },
};
</script>

<style>
.repo-details {
  max-width: 800px;
  margin: 40px auto;
  background-color: whitesmoke;
  padding: 20px;
  border-radius: 4px;
 
}
.repo-details h1 {
  text-align: center;
  text-transform: uppercase;
  color: steelblue;
}

.repo-details-info h3,h5{
  color: orange;
}
.repo-details-info {
  border-left: 1px solid rgb(59, 59, 59);
  margin: 30px 0;
  padding-left: 20px;
  border-radius: 0 0 0 6px;
  color: #50b7f5;
  background-color: whitesmoke;
}
.error {
  margin-top: 20px;
  text-align: center;
  font-size: 20px;
  color: black;
}
</style>

