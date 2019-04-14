<template>
    <div id="container">
        <a id="countdown"></a>
        <b-jumbotron fluid id="countdown-content">
            <template slot="header">
                <b-container>
                    <b-row>
                        <b-col>
                            <p id="day" v-resize-text="{minFontSize: '65px', maxFontSize: '100px', delay: '20'}">{{ $t("timer.day") }}</p>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col class="d-none d-md-inline-block"></b-col>
                        <b-col>
                            <p v-resize-text="{minFontSize: '20px', maxFontSize: '25px', delay: '20'}">{{ $t("timer.date") }}</p>
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
            <custom-button :linkTo="'/rsvp'" :text-translation-id="'timer.button.rsvp'" />
            <custom-button :target="'#'" :scroll-to="'#about'" :text-translation-id="'timer.button.learn_more'" />
        </b-jumbotron>
    </div>
</template>
<script>
    import CustomButton from './CustomButton';
    export default {
        name: 'countdown-content',
        components: {CustomButton},
    };
</script>


<style scoped lang="less">
    @import "../style/App.less";
    //noinspection CssUnknownTarget
    @import (css) url('https://fonts.googleapis.com/css?family=EB+Garamond');

    #day {
        font-family: 'EB Garamond', sans-serif;
        letter-spacing: 8px;
    }

    .colon {
        color: white;
    }

    .my-4 {
        background-color: @fontcolor;
    }

    .time {
        font-size: 25px;
    }

    .description {
        font-size: 25px;
    }

    #countdown-content {
        background-color: @background-color-components;
    }

    .my-button {
        margin-right: 15px;
    }
</style>
