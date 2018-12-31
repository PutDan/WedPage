<template>
  <div class="home">
    <parallax-image />
    <circular-names/>
    <countdown-content id="countdown"/>
    <about-content id="about"/>
  </div>
</template>

<style lang="less">
    @import "../style/App.less";
    //noinspection CssUnknownTarget
    @import (css) url('https://fonts.googleapis.com/css?family=Charm');
    #home-header {
       background-color: @deepgreen !important;
   }
    #countdown {
      text-align: center;
      position: absolute;
      display: inline-block;
      margin-top: -17%;
      margin-left: -25%;
    }
    #names {
      text-align: center;
      position: absolute;
      display: inline-block;
      margin-top: -40%;
      margin-left: -5%;
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