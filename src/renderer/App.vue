<template>
  <div id="app" class="h-100 w-100">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'moikanet'
  }
</script>

<style>
  /* CSS */
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');

  html,
  body {
    height: 100%;
    width: 100%;
  }

  body { font-family: 'Source Sans Pro', sans-serif; }
  #app{
    background-color: #600591;
  }

  .bg-black{
    background-color: #000;
  }

  .bg-purple{
    background-color: #600591;
  }

  .fnt-white{
    color: #fff;
  }
</style>
