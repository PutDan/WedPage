<template>
  <b-container fluid id="home">
    <parallax-image />
    <invitation id="invitation"/>
    <span id="margin-small" class="d-inline-block d-md-none"></span>
    <about-content data-aos="fade-up" id="about"/>
    <countdown-content data-aos="fade-down" id="countdown"/>
    <right-sided-content data-aos="fade-right" id="right-side"/>
    <left-sided-content data-aos="fade-left" id="left-side"/>
  </b-container>
</template>

<style lang="less">
    @import "../style/App.less";

    #countdown {
      margin-top: 10%;
    }

    #invitation {
      float: top;
      position: absolute;
      top: 100px;
      right: 0;
      left: 0;
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

    #margin-small {
      margin-top: 350px;
    }

    #about {
      margin-top: 5%;
    }

</style>


<script>
  import ParallaxImage from '../components/ParallaxImage';
  import CountdownContent from '../components/CountdownContent';
  import invitation from '../components/Invitation';
  import AboutContent from '../components/AboutContent';
  import RightSidedContent from '../components/RightSidedContent';
  import LeftSidedContent from '../components/LeftSidedContent';

  export default {
        components: {
          RightSidedContent,
          AboutContent,
          invitation,
          CountdownContent,
          ParallaxImage,
          LeftSidedContent,
        },
    };
</script>
