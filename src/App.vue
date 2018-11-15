<template>
  <div id="app">
    <div class="left-side">
      <router-link class="tab" v-for="name in names" :to="'/page1/'+name" tag="li">{{name}}</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      names:['freddy','nick','mike']
    }
  }
}
</script>

<style>
  body{
    margin:0;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height:100vh;
    width:100%;
  }
  .left-side{
     background-color: #252525;
     color:white;
     width:15%;
     height:100%;
     padding:15px;
     display: inline-block;
   }
  .left-side .tab{
    margin:5px;
    cursor: pointer;
  }
  .router-link-active{
    color:orange;
  }
</style>
