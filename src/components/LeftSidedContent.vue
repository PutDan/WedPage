<template>
    <b-container id="container">
        <b-modal centered v-model="showMapsModal" id="mapsModal">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10467.603032511342!2d8.426661!3d49.012473!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf9e5a1ff56ad8e19!2sHoepfner+Burghof+Brauereiausschank+-+Hotel!5e0!3m2!1sen!2sde!4v1546772890208" width="400" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>
        </b-modal>
        <b-row>
            <b-col class="border border-warning" id="content">
                <b-row>
                    <b-col>
                        <b-row>
                            <b-col>
                                <h1 id="title" v-resize-text="{ratio: '0.8', minFontSize: '20px', maxFontSize: '49px', delay: '20'}">{{ $t("leftside.title" ) }}</h1>
                            </b-col>
                        </b-row>
                        <b-row>
                            <b-col>
                                <b-row><b-col><h3 v-resize-text="{ratio: '1.1', minFontSize: '12px', maxFontSize: '25px', delay: '20'}"><u>{{ $t("rightside.where") }}</u></h3></b-col></b-row>
                                <b-row>
                                    <b-col id="address">
                                        <b-row><b-col v-resize-text="{ratio: '1.1', minFontSize: '8px', maxFontSize: '18px', delay: '20'}">Schalander - Hoepfner Burghof</b-col></b-row>
                                        <b-row></b-row><b-col v-resize-text="{ratio: '1.1', minFontSize: '8px', maxFontSize: '18px', delay: '20'}">Haid-und-Neu-Straße 18</b-col></b-row-form>
                                        <b-row><b-col v-resize-text="{ratio: '1.1', minFontSize: '8px', maxFontSize: '18px', delay: '20'}">76131 Karlsruhe</b-col></b-row>
                                        <b-row><b-col><i class="material-icons" @click="showMapsModal = true">place</i>
                                            <a id="maps" class="d-none d-md-inline-block" @click="showMapsModal = true">{{ $t("rightside.maps") }}</a></b-col>
                                        </b-row>
                                    </b-col>
                                </b-row>
                            </b-col>
                        </b-row>
                        <br />
                        <b-row>
                            <b-col>
                                <h3 v-resize-text="{ratio: '1.1', minFontSize: '12px', maxFontSize: '25px', delay: '20'}"><u>{{ $t("rightside.when") }}</u></h3>
                                <p v-resize-text="{ratio: '1.1', minFontSize: '8px', maxFontSize: '18px', delay: '20'}">{{ $t("leftside.date") }}</p>
                            </b-col>
                        </b-row>
                    </b-col>
                    <b-col class="d-none d-sm-inline-block" col cols="3">
                        <b-img fluid alt="Höpfner Brewery" height="25px" rounded="circle" thumbnail :src="require('../assets/hoepfner.jpg')"></b-img>
                    </b-col>
                </b-row>
            </b-col>
        </b-row>
    </b-container>
</template>
<script>
    export default {
        name: 'left-sided-content',
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
        background-color: #C4C4C4;
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

    #content {
        color: @deepgreen;
    }
</style>
