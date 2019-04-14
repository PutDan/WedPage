<template>
    <b-container id="container">
        <b-modal centered v-model="showMapsModal" id="mapsModal">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10468.359162702543!2d8.4200062!3d49.0088767!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xcec0ba59ed6771b5!2sKirche+St.+Bernhard!5e0!3m2!1sen!2sde!4v1546345635638" width="350" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>
        </b-modal>
        <b-row>
            <b-col id="content">
                <b-row>
                    <b-col class="d-none d-sm-inline-block">
                        <custom-image name="church.jpg"></custom-image>
                    </b-col>
                    <b-col>
                        <b-row>
                            <b-col>
                                <h1 id="title" v-resize-text="{ratio: '0.8', minFontSize: '25px', maxFontSize: '55px', delay: '20'}">{{ $t("rightside.title" ) }}</h1>
                            </b-col>
                        </b-row>
                        <b-row>
                            <b-col>
                                <b-row><b-col><h3 v-resize-text="{ratio: '1.1', minFontSize: '12px', maxFontSize: '25px', delay: '20'}"><u>{{ $t("rightside.where") }}</u></h3></b-col></b-row>
                                <b-row>
                                    <b-col id="address">
                                        <b-row><b-col v-resize-text="{ratio: '1.1', minFontSize: '8px', maxFontSize: '18px', delay: '20'}">St. Bernhard</b-col></b-row>
                                        <b-row><b-col v-resize-text="{ratio: '1.1', minFontSize: '8px', maxFontSize: '18px', delay: '20'}">Bernhardstr. 15</b-col></b-row>
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
                                <p v-resize-text="{ratio: '1.1', minFontSize: '8px', maxFontSize: '18px', delay: '20'}">{{ $t("rightside.date") }}</p>
                            </b-col>
                        </b-row>
                    </b-col>
                </b-row>
            </b-col>
        </b-row>
    </b-container>
</template>
<script>
    import CustomImage from './CustomImage';
    export default {
        name: 'right-sided-content',
        components: {CustomImage},
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
    @import (css) url('https://fonts.googleapis.com/css?family=EB+Garamond');
    //noinspection CssUnknownTarget
    @import (css) url('https://fonts.googleapis.com/icon?family=Material+Icons');

    .container {
        max-width: 750px;
        background-color: @background-color-components;
    }
    #title {
        font-family: 'EB Garamond', sans-serif;
        letter-spacing: 8px;
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
        color: @fontcolor;
    }
</style>
