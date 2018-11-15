<template>
  <div class="content">
    <label>名字：
      <input :value="this.$route.params.name"/>
    </label>
  </div>
</template>

<script>
    export default {
        name: "PageName"
    }
</script>

<style scoped>
  .content{
    display: inline-block;
    vertical-align: top;
    padding:20px;
  }
</style>
