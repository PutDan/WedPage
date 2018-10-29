<template>
  <div id="app">
    <HelloWorld msg="STUPID VUE"/>
    <div>
      Haters gonna hate.\n
      this fucking vue doesn' work with LESS
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style>
  .animate-box{
    align-content: center;

    margin-left: 693px;

    margin-top: 100px;

    background-color: #2c0505;

    color: #ffa138;

    margin-right: 660px;
  }

  body{
    background-color: #0d1e06;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #e8b910;
  margin-top: 60px;
}
</style>
