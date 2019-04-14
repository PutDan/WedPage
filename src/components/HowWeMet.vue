<template>
    <b-container fluid id="container">
        <b-row>
            <b-col>
                <h1 id="title">{{ $t('met.title') }}</h1>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <div id="img-old">
                    <b-col>
                        <b-img  alt="Us in 2015" thumbnail height="350px" width="250px" :src="require('../assets/IMG_0548.jpg')"></b-img>
                    </b-col>
                    <b-col>{{ $t('met.oldImg') }}</b-col>
                </div>
                <p>{{ $t('met.description1') }}</p>
                <button class="button"  @click="showCollapse = true"
                       :class="showCollapse ? 'collapsed' : null"
                       aria-controls="collapse1"
                       :aria-expanded="showCollapse ? 'true' : 'false'" v-if="!showCollapse">
                    <span class="button-text">{{ $t('met.readMore') }}</span>
                </button>
                <b-collapse id="collapse1" v-model="showCollapse" class="mt-2">
                    <div id="img-new">
                        <b-img  alt="Us in 2019" thumbnail width="350px" :src="require('../assets/2019.jpg')"></b-img>
                        <p>{{ $t('met.newImg') }}</p>
                    </div>
                    <p>{{ $t('met.description2') }}</p>
                    <div id="image-row">
                        <b-row>
                            <b-col>
                                <b-col>
                                    <b-img alt="Us in 2017 fishing in the Atlantic" thumbnail fluid rounded="circle" height="150px" width="350px" :src="require('../assets/imgRow2.jpg')"></b-img>
                                </b-col>
                                <b-col>{{ $t('met.imgRow1') }}</b-col>
                            </b-col>
                            <b-col class="d-none d-md-inline-block">
                                <b-col>
                                    <b-img  alt="Us in 2016 in Rome" thumbnail fluid rounded="circle" height="150px" width="150px" :src="require('../assets/imgRow1.jpg')"></b-img>
                                </b-col>
                                <b-col>{{ $t('met.imgRow2') }}</b-col>
                            </b-col>
                            <b-col class="d-none d-sm-inline-block">
                                <b-col>
                                    <b-img alt="Us in 2018 in Indonesia with Putri's Brother" thumbnail rounded="circle"  height="150px" width="350px" fluid :src="require('../assets/imgRow3.jpg')"></b-img>
                                </b-col>
                                <b-col>{{ $t('met.imgRow3') }}</b-col>
                            </b-col>
                        </b-row>
                    </div>
                    <button class="button" @click="showCollapse = false"
                           :class="showCollapse ? 'collapsed' : null"
                           aria-controls="collapse1"
                           :aria-expanded="showCollapse ? 'true' : 'false'" v-if="showCollapse">
                        <span class="button-text">{{ $t('met.readLess') }}</span>
                    </button>
                </b-collapse>

            </b-col>
        </b-row>
    </b-container>
</template>
<script>
    export default {
        name: 'how-we-met',
        data() {
            return {
                showCollapse: false,
            };
        },
    };
</script>
<style scoped lang="less">
    @import "../style/App.less";
    //noinspection CssUnknownTarget
    @import (css) url('https://fonts.googleapis.com/css?family=EB+Garamond');
    #title {
        font-family: 'EB Garamond', sans-serif;
        letter-spacing: 8px;
    }

    * {
        color: @fontcolor;
        letter-spacing: 2px;
    }

    #img-old {
        float: right;
    }

    #img-new {
        float: left;
    }

    #image-row {
        float: bottom;
    }

    .button {
        color: @fontcolor;
        letter-spacing: normal;
        background-color: transparent;
        border: solid 1px @fontcolor;
    }

    .button-text {
        margin: 25px 25px 25px 25px;
    }

    .button:hover {
        background-color: @fontcolor;
        color: white;
    }

</style>