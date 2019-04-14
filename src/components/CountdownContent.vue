<template>
    <div id="container">
        <a id="countdown"></a>
        <b-container fluid id="countdown-content">
                <b-container>
                    <b-row>
                        <b-col id="headline">
                            <p v-resize-text="{minFontSize: '20px', maxFontSize: '45px', delay: '20'}">{{ $t("timer.date") }}</p>
                        </b-col>
                    </b-row>
                </b-container>
                <b-container >
                    <vac :end-time="new Date('Jul 6 2019 13:00:00 GMT+2').getTime()">
                        <span slot="process"
                            slot-scope="{ timeObj }">
                            <b-container>
                                <b-row id="countdown-progress">
                                      <b-col>
                                          <b-row>
                                              <b-col>
                                                  <p class="time" v-resize-text="{minFontSize: '20px', maxFontSize: '75px', delay: '20'}">{{` ${timeObj.d} `}}</p>
                                                  <p class="description" v-resize-text="{minFontSize: '20px', maxFontSize: '65px', delay: '20'}">{{ $t("timer.days") }}</p>
                                              </b-col>
                                          </b-row>
                                      </b-col>
                                      <b-col class="d-none d-md-inline-block"><p class="colon"><br />:</p></b-col>
                                      <b-col>
                                          <b-row>
                                              <b-col>
                                                  <p class="time"  v-resize-text="{minFontSize: '20px', maxFontSize: '75px', delay: '20'}">{{` ${timeObj.h} `}}</p>
                                                  <p class="description"  v-resize-text="{minFontSize: '20px', maxFontSize: '75px', delay: '20'}">{{ $t("timer.hours") }}</p>
                                              </b-col>
                                          </b-row>
                                      </b-col>
                                      <b-col class="d-none d-md-inline-block"><p class="colon"><br />:</p></b-col>
                                      <b-col>
                                          <b-row>
                                              <b-col>
                                                  <p class="time"  v-resize-text="{minFontSize: '20px', maxFontSize: '75px', delay: '20'}">{{` ${timeObj.m} `}}</p>
                                                  <p class="description"  v-resize-text="{minFontSize: '20px', maxFontSize: '75px', delay: '20'}">{{ $t("timer.minutes") }}</p>
                                              </b-col>
                                          </b-row>
                                      </b-col>
                                      <b-col class="d-none d-md-inline-block"><p class="colon"><br />:</p></b-col>
                                      <b-col>
                                          <b-row>
                                              <b-col>
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
                </b-container>
            <hr class="my-4">
            <!--<custom-button :target="'https://docs.google.com/forms/d/e/1FAIpQLScv3t1Ugo3j7wURajMSGrt_NfEE8udQuTICwU8gs9Iwqmo-Gw/formResponse'" :text-translation-id="'timer.button.rsvp'" />-->
            <custom-button :target="'#'" :scroll-to="'#about'" :text-translation-id="'timer.button.learn_more'" />
        </b-container>
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

    #headline {
        margin-top: 50px;
        margin-bottom: 50px;
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
        background-color: @alternative-background-color-components;
    }

    #button1 {
        margin-right: 10px;
    }
</style>
