<template>
  <b-container fluid id="home">
    <parallax-image />
    <circular-names id="names"/>
    <countdown-content data-aos="fade-down" id="countdown"/>
    <right-sided-content data-aos="fade-right" id="right-side"/>
    <left-sided-content data-aos="fade-left" id="left-side"/>
    <about-content data-aos="fade-up" id="about"/>
  </b-container>
</template>

<style lang="less">
    @import "../style/App.less";
    //noinspection CssUnknownTarget
    @import (css) url('https://fonts.googleapis.com/css?family=Charm');
    #countdown {
      margin-top: 10%;
    }

    #names {
      float: top;
      position: absolute;
      top: 200px;
      left: -8%;
      right: 0;
      bottom: 0;
      text-align: center;
    }

    #right-side {
      float: right;
      margin-top: 100px;
    }

    #left-side {
      float: left;
      margin-top: 100px;
    }

    #about {
      float: bottom;
      z-index: 10;
      margin-top: 950px;
    }
</style>


<script>
  import ParallaxImage from '../components/ParallaxImage';
  import CountdownContent from '../components/CountdownContent';
  import CircularNames from '../components/CircularNames';
  import AboutContent from '../components/AboutContent';
  import RightSidedContent from '../components/RightSidedContent';
  import LeftSidedContent from '../components/LeftSidedContent';

  export default {
        components: {
          RightSidedContent,
          AboutContent,
          CircularNames,
          CountdownContent,
          ParallaxImage,
          LeftSidedContent,
        },
    };
</script>
