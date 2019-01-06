<template>
    <div id="container">
        <b-jumbotron fixed id="countdown" border-variant="warning" class="charm">
            <template slot="header">
                <div v-resize-text="{ratio: '1.2', minFontSize: '30px', maxFontSize: '65px', delay: '20'}">
                <!--suppress CheckImageSize -->
                <b-img :src="require('../assets/wedding-rings.svg')" height="75px" alt="Wedding time" /> {{ $t("timer.date") }} <b-img :src="require('../assets/wedding-rings.svg')" height="75px" alt="Wedding time" />
                </div>
            </template>
            <template slot="lead">
                <br />
                <vac :end-time="new Date('Jul 25 2019 00:00:00 GMT+1').getTime()">
                    <span slot="process"
                        slot-scope="{ timeObj }">
                        <b-container>
                            <b-row id="countdown-progress">
                                  <b-col class="border">
                                      <b-row>
                                          <b-col>
                                              <p class="time"  v-resize-text="{ratio: '1.2', minFontSize: '15px', maxFontSize: '75px', delay: '20'}">{{` ${timeObj.d} `}}</p>
                                              <p class="description"  v-resize-text="{ratio: '1.2', minFontSize: '15px', maxFontSize: '75px', delay: '20'}">{{ $t("timer.days") }}</p>
                                          </b-col>
                                      </b-row>
                                  </b-col>
                                  <b-col class="d-none d-md-inline-block"></b-col>
                                  <b-col class="border">
                                      <b-row>
                                          <b-col>
                                              <p class="time"  v-resize-text="{ratio: '1.2', minFontSize: '15px', maxFontSize: '75px', delay: '20'}">{{` ${timeObj.h} `}}</p>
                                              <p class="description"  v-resize-text="{ratio: '1.2', minFontSize: '15px', maxFontSize: '75px', delay: '20'}">{{ $t("timer.hours") }}</p>
                                          </b-col>
                                      </b-row>
                                  </b-col>
                                  <b-col class="d-none d-md-inline-block"></b-col>
                                  <b-col class="border">
                                      <b-row>
                                          <b-col>
                                              <p class="time"  v-resize-text="{ratio: '1.2', minFontSize: '15px', maxFontSize: '75px', delay: '20'}">{{` ${timeObj.m} `}}</p>
                                              <p class="description"  v-resize-text="{ratio: '1.2', minFontSize: '15px', maxFontSize: '75px', delay: '20'}">{{ $t("timer.minutes") }}</p>
                                          </b-col>
                                      </b-row>
                                  </b-col>
                                  <b-col class="d-none d-md-inline-block"></b-col>
                                  <b-col class="border">
                                      <b-row>
                                          <b-col>
                                              <p class="time"  v-resize-text="{ratio: '1.2', minFontSize: '15px', maxFontSize: '75px', delay: '20'}">{{` ${timeObj.s} `}}</p>
                                              <p class="description"  v-resize-text="{ratio: '1.2', minFontSize: '15px', maxFontSize: '75px', delay: '20'}">{{ $t("timer.seconds") }}</p>
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
            <b-btn variant="primary" to="/rsvp">{{ $t("timer.button.rsvp") }}</b-btn>
            <b-btn variant="success" href="#about">{{ $t("timer.button.learn_more") }}</b-btn>
        </b-jumbotron>
    </div>
</template>
<script>
    export default {
        name: 'countdown-content',
    };
</script>


<style scoped lang="less">
    @import "../style/App.less";
    //noinspection CssUnknownTarget
    @import (css) url('https://fonts.googleapis.com/css?family=Charm');
    //noinspection CssUnknownTarget
    @import (css) url('https://fonts.googleapis.com/css?family=Lato');

    .charm {
        font-family: 'Charm', cursive;
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

    #countdown {
        background-color: @deepgreen;
        ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=90)";       /* IE 8 */
        filter: alpha(opacity=90);  /* IE 5-7 */
        -moz-opacity: 0.9;          /* Netscape */
        -khtml-opacity: 0.9;        /* Safari 1.x */
        opacity: 0.9;
    }
</style>
