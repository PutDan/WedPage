<!--This vue-"class" controls the entire website-->
<template>
  <div id="app">
    <div id="nav">
      <!--This is the navigation bar on the top of the page-->
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/rsvp">RSVP</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="less">
  /** This is the color scheme for the page*/
  @deepgreen : #0d1e06;
  @intensivered: #6d1127;
  @richgold: #e8b910;
  @woodbrown: #664510;
  @activenav: #ffd84d;
  @linkedel: #ba825f;
  @flowerred: #8C151D;

  html{
    text-align: center;
  }

  body{
    background-color: @deepgreen;
    align-content: center;
  }

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: @richgold;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: @linkedel;
    &.router-link-exact-active {
      color: @activenav;
    }
  }
}
</style>
