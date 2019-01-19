<template>
    <div id="container">
        <a id="countdown"></a>
        <b-jumbotron fixed id="countdown-content" border-variant="warning">
            <template slot="header">
                <b-container>
                    <b-row>
                        <b-col class="d-none d-md-inline-block">
                            <!--suppress CheckImageSize -->
                            <b-img :src="require('../assets/wedding-rings.svg')" height="75px" alt="Wedding time" />
                        </b-col>
                        <b-col>
                            <p class="written1" v-resize-text="{minFontSize: '65px', maxFontSize: '100px', delay: '20'}">{{ $t("timer.day") }}</p>
                        </b-col>
                        <b-col class="d-none d-md-inline-block">
                            <!--suppress CheckImageSize -->
                            <b-img :src="require('../assets/wedding-rings.svg')" height="75px" alt="Wedding time" />
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col class="d-none d-md-inline-block"></b-col>
                        <b-col>
                            <p class="written2" v-resize-text="{minFontSize: '20px', maxFontSize: '55px', delay: '20'}">{{ $t("timer.date") }}</p>
                        </b-col>
                        <b-col class="d-none d-md-inline-block"></b-col>
                    </b-row>
                </b-container>
            </template>
            <template slot="lead">
                <br />
                <vac :end-time="new Date('Jul 25 2019 00:00:00 GMT+1').getTime()">
                    <span slot="process"
                        slot-scope="{ timeObj }">
                        <b-container>
                            <b-row id="countdown-progress">
                                  <b-col>
                                      <b-row>
                                          <b-col class="border">
                                              <p class="time" v-resize-text="{minFontSize: '20px', maxFontSize: '75px', delay: '20'}">{{` ${timeObj.d} `}}</p>
                                              <p class="description" v-resize-text="{minFontSize: '20px', maxFontSize: '65px', delay: '20'}">{{ $t("timer.days") }}</p>
                                          </b-col>
                                      </b-row>
                                  </b-col>
                                  <b-col class="d-none d-md-inline-block"><p class="colon"><br />:</p></b-col>
                                  <b-col>
                                      <b-row>
                                          <b-col class="border">
                                              <p class="time"  v-resize-text="{minFontSize: '20px', maxFontSize: '75px', delay: '20'}">{{` ${timeObj.h} `}}</p>
                                              <p class="description"  v-resize-text="{minFontSize: '20px', maxFontSize: '75px', delay: '20'}">{{ $t("timer.hours") }}</p>
                                          </b-col>
                                      </b-row>
                                  </b-col>
                                  <b-col class="d-none d-md-inline-block"><p class="colon"><br />:</p></b-col>
                                  <b-col>
                                      <b-row>
                                          <b-col class="border">
                                              <p class="time"  v-resize-text="{minFontSize: '20px', maxFontSize: '75px', delay: '20'}">{{` ${timeObj.m} `}}</p>
                                              <p class="description"  v-resize-text="{minFontSize: '20px', maxFontSize: '75px', delay: '20'}">{{ $t("timer.minutes") }}</p>
                                          </b-col>
                                      </b-row>
                                  </b-col>
                                  <b-col class="d-none d-md-inline-block"><p class="colon"><br />:</p></b-col>
                                  <b-col>
                                      <b-row>
                                          <b-col class="border">
                                              <p class="time"  v-resize-text="{minFontSize: '20px', maxFontSize: '75px', delay: '20'}">{{` ${timeObj.s} `}}</p>
                                              <p class="description"  v-resize-text="{minFontSize: '20px', maxFontSize: '75px', delay: '20'}">{{ $t("timer.seconds") }}</p>
                                          </b-col>
                                      </b-row>
                                  </b-col>
                          </b-row>
                      </b-container>
                      </span>
                      <span slot="finish">{{ $t("timer.finish")}}</span>
                </vac>
            </template>
            <hr class="my-4">
            <b-btn class="my-button" variant="primary" to="/rsvp">{{ $t("timer.button.rsvp") }}</b-btn>
            <b-btn variant="success" href="#about">{{ $t("timer.button.learn_more") }}</b-btn>
        </b-jumbotron>
    </div>
</template>
<script>
    export default {
        name: 'countdown-content',
    };
</script>


<!--suppress CssUnknownTarget -->
<style scoped lang="less">
    @import "../style/App.less";
    @import (css) url('https://fonts.googleapis.com/css?family=Charm');
    @import (css) url('https://fonts.googleapis.com/css?family=Lato');
    @import (css) url('https://fonts.googleapis.com/css?family=Monsieur+La+Doulaise');

    .written1 {
        font-family: 'Monsieur La Doulaise', cursive;
    }

    .written2 {
        font-family: 'Charm', cursive;
    }

    .colon {
        color: white;
    }

    .my-4 {
        background-color: @richgold;
    }

    .time {
        font-size: 25px;
    }

    .description {
        font-size: 25px;
    }

    #countdown-progress {
        font-family: 'Lato', sans-serif;
    }

    #countdown-content {
        background-color: @deepgreen;
        ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=90)";       /* IE 8 */
        filter: alpha(opacity=90);  /* IE 5-7 */
        -moz-opacity: 0.9;          /* Netscape */
        -khtml-opacity: 0.9;        /* Safari 1.x */
        opacity: 0.9;
    }

    .my-button {
        margin-right: 15px;
    }
</style>
