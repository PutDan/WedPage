<template>
  <b-container class="home">
    <parallax-image />
    <circular-names id="names"/>
    <countdown-content id="countdown"/>
    <about-content id="about"/>
  </b-container>
</template>

<style lang="less">
    @import "../style/App.less";
    //noinspection CssUnknownTarget
    @import (css) url('https://fonts.googleapis.com/css?family=Charm');
    #countdown {
      text-align: center;
      margin-top: 150px;
    }
    #names {
      position: absolute;
      display: block;
      top: 200px;
      left: -8%;
      right: 0;
      bottom: 0;
      z-index: 0;
      text-align: center;
    }
    #about {
      margin-top: 10%;
    }
</style>


<script>
  import ParallaxImage from '../components/ParallaxImage';
  import CountdownContent from '../components/CountdownContent';
  import CircularNames from '../components/CircularNames';
  import AboutContent from '../components/AboutContent';

  export default {
        components: {
          AboutContent,
          CircularNames,
          CountdownContent,
          ParallaxImage,
        },
    };
</script>