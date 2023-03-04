<template>
  <div class="homepage">
  <div class="homepage__left">
    <h2>Hello I'M Ojo Taiwo</h2>
    <!-- <img src="./assets/use.png" > -->
  </div>
  <div class="homepage__right">
    <div class="homepage__right--top">
       <h3>Folarh's Github Profile</h3>
    </div>
    <div class="homepage__right--bottom">
       <h3>Ojo Taiwo</h3>
       <p>I am Frontend developer, and also a pianist,
        i am currently opened to frontend Development roles.
        i am passionate about sharing knowledge.
       </p>
    </div>
         
  </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.homepage{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  height: 700px;
  background: #f1f1f1;
  margin-top: 20px;
  padding: 20px;

}
.homepage__left{
  flex: 0.5;
  border-right: 1px solid red;
}
.homepage__left h2{
  text-align: center;
}

.homepage__right{
  flex: 0.5;
  padding: 20px;
}

.homepage__right--top{
height: 150px;
align-items: center;
}
.homepage__right--top h3{
  text-align: center;
}

.homepage__right--bottom{
  background-color: blue;
  height: 500px;
  margin-top: 10px;
}

.homepage__right--bottom h3,p{
  text-align: center;
}
</style>