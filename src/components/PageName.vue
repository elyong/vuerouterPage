<template>
    <div class="page-name">
      <div class="left-side">
        <router-link :class="{tab:true}" v-for="name in names" :to="'/page1/'+name" tag="li">{{name}}</router-link>
      </div>
      <div class="content">
        <label>名字：
          <input :value="this.$route.params.name"/>
        </label>
      </div>
    </div>


</template>

<script>
    export default {
        name: "PageName",
        data(){
          return{
            names:['freddy','nick','mike']
          }
        }
    }
</script>

<style scoped>
  .page-name{
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
  .content{
    display: inline-block;
    vertical-align: top;
    padding:20px;
  }
  .router-link-active{
    color:orange;
  }
</style>
