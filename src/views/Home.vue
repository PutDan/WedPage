<template>
  <b-container id="home">
    <parallax-image />
    <circular-names id="names"/>
    <countdown-content id="countdown"/>
    <right-sided-content id="right-side"/>
    <left-sided-content id="left-side"/>
    <about-content id="about"/>
  </b-container>
</template>

<style lang="less">
    @import "../style/App.less";
    //noinspection CssUnknownTarget
    @import (css) url('https://fonts.googleapis.com/css?family=Charm');
    #countdown {
      margin-top: -22%;
    }
    #names {
      position: absolute;
      top: 200px;
      left: -8%;
      right: 0;
      bottom: 0;
      text-align: center;
    }
    #right-side {
      margin-left: 33%;
      margin-top: 100px;
    }
    #left-side {
      margin-top: 100px;
    }
    #about {
      margin-top: 500px;
    }

    #home {
      overflow: auto;
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
