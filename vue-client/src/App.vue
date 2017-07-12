<template>
  
  <div>
    <appHeader></appHeader>
    <router-view></router-view>
    <appBottom></appBottom>
  </div>
  
</template>

<script>
import Header from './client/header.vue';
import Bottom from './client/bottom.vue';

export default {
  components:{
    appHeader:Header,
    appBottom:Bottom    
  }
}

</script>

<style lang="scss">
body {
    font-family: "Hiragino Sans GB","华文细黑","STHeiti","微软雅黑","Microsoft YaHei",SimHei,"Helvetica Neue",Helvetica,Arial,sans-serif !important;
    font-size: 14px;
    line-height: 1.43;
    color: #484848;
    background-color: #fff;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
</style>
