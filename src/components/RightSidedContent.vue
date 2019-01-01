<template>
    <b-container>
        <b-modal centered v-model="showMapsModal" id="mapsModal">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10468.359162702543!2d8.4200062!3d49.0088767!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xcec0ba59ed6771b5!2sKirche+St.+Bernhard!5e0!3m2!1sen!2sde!4v1546345635638" width="400" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>        </b-modal>
        <b-row>
            <b-col class="border" col cols="8" id="content">
                <b-row>
                    <b-col col cols="4">
                        <b-img center fluid alt="St. Bernhard" rounded="circle" thumbnail :src="require('../assets/church.jpg')"></b-img>
                    </b-col>
                    <b-col col cols="8">
                        <b-row>
                            <b-col>
                                <h1 id="title" v-resize-text="{ratio: '0.8', minFontSize: '30px', maxFontSize: '150px', delay: '20'}">Church Ceremony</h1>
                            </b-col>
                        </b-row>
                        <b-row>
                            <b-col id="where" v-resize-text="{ratio: '1.1', minFontSize: '10px', maxFontSize: '30px', delay: '20'}">
                                <b-row><b-col><h3 v-resize-text="{ratio: '1.1', minFontSize: '20px', maxFontSize: '35px', delay: '20'}">Where?</h3></b-col></b-row>
                                <b-row>
                                    <b-col>
                                        <b-row-form><b-col>St. Bernhard</b-col></b-row-form>
                                        <b-row-form><b-col>Bernhardstr. 15</b-col></b-row-form>
                                        <b-row-form><b-col>76131 Karlsruhe</b-col></b-row-form>
                                        <b-row><b-col><i class="material-icons" @click="showMapsModal = true">place</i>
                                            <a id="maps" @click="showMapsModal = true">Open in Google Maps</a></b-col>
                                        </b-row>
                                    </b-col>
                                </b-row>
                            </b-col>
                        </b-row>
                        <b-row>
                            <b-col id="when" v-resize-text="{ratio: '1.1', minFontSize: '10px', maxFontSize: '30px', delay: '20'}">
                                <h3 v-resize-text="{ratio: '1.1', minFontSize: '20px', maxFontSize: '35px', delay: '20'}">When?</h3>
                                <p>6th of July, 2019, Time TBD</p>
                            </b-col>
                        </b-row>
                    </b-col>
                </b-row>
            </b-col>
        </b-row>
    </b-container>
</template>
<script>
    export default {
        name: 'right-sided-content',
        data()  {
            return {
                showMapsModal: false,
            };
        },
    };
</script>
<style scoped lang="less">
    @import "../style/App.less";
    //noinspection CssUnknownTarget
    @import (css) url('https://fonts.googleapis.com/css?family=Charm');
    //noinspection CssUnknownTarget
    @import (css) url('https://fonts.googleapis.com/css?family=Lato');
    //noinspection CssUnknownTarget
    @import (css) url('https://fonts.googleapis.com/icon?family=Material+Icons');

    #title {
        font-family: 'Charm', cursive;
    }

    #content {
        background-color: @woodbrown;
        font-family: 'Lato', sans-serif;
        ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=90)";       /* IE 8 */
        filter: alpha(opacity=90);  /* IE 5-7 */
        -moz-opacity: 0.9;          /* Netscape */
        -khtml-opacity: 0.9;        /* Safari 1.x */
        opacity: 0.9;
    }

    #where {
        font-family: 'Lato', sans-serif;
    }

    #maps {
        font-size: 16px;
        color: @linkedel;
        text-decoration: underline;
        cursor: pointer;
    }

    #mapsModal {
        visibility: hidden;
    }

    .material-icons {
        cursor: pointer;
        color: @linkedel;
    }
</style>