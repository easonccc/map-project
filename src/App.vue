<template>
  <div id="app">

    <router-view></router-view>


  </div>
</template>
<script>
  export default {
    methods:{
      quit(){
        location.href = 'login.html'
      }
    }
  }
</script>

<style lang="less">
  body {
    overflow: hidden;
    width: 100vw;
    height: 100vh;
    box-sizing: border-box; //font-family: PingFangSC-Regular;
  }

  #app {
    font-family: 'Microsoft YaHei', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width: 100%;
    height: 100%;

  }

</style>
