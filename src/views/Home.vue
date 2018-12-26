<template>
  <div class="home">
      <!--<b-jumbotron id="home-header">
          <template slot="header">{{ $t("home.title") }}</template>
          <template slot="lead">
              This is a simple hero unit, a simple jumbotron-style component for
              calling extra attention to featured content or information.
          </template>
          <hr class="my-4">
          <p>
              It uses utility classes for typography and spacing to space content
              out within the larger container.
          </p>
          <b-btn variant="primary" href="#">Do Something</b-btn>
          <b-btn variant="success" href="#">Do Something Else</b-btn>
      </b-jumbotron>-->
    <b-carousel id="home-carousel"
                style="text-shadow: 1px 1px 2px #333;"
                controls
                indicators
                background="#ababab"
                :interval="4000"
                img-width="1024"
                img-height="480"
                v-model="slide"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd"
    >

      <!-- Text slides with image -->
      <b-carousel-slide :caption="$t('home.slide1')"
                        :text="$t('home.date')"
                        :img-src="require('../assets/slide1.jpg')"
                        img-height="1"
                        img-width="1"
      ></b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
        <h1>Hello world!</h1>
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58">
      </b-carousel-slide>

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide>
        <img slot="img" class="d-block img-fluid w-100" width="1024" height="480"
             src="https://picsum.photos/1024/480/?image=55" alt="image slot">
      </b-carousel-slide>

      <!-- Slide with blank fluid image to maintain slide aspect ratio -->
      <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          eros felis, tincidunt a tincidunt eget, convallis vel est. Ut pellentesque
          ut lacus vel interdum.
        </p>
      </b-carousel-slide>

    </b-carousel>

    <p class="mt-4">
      Slide #: {{ slide }}<br>
      Sliding: {{ sliding }}
    </p>
    <img alt="06.07.2019" src="../assets/logo.png" style="height: 400px; width:auto">
    <h1>{{ $t("home.text") }}</h1>
  </div>
</template>

<style lang="less">
    @import "../style/App.less";
    #home-header {
       background-color: @deepgreen !important;
   }
</style>
