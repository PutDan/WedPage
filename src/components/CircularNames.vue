<template>
    <b-container>
        <b-row id="first-row">
            <b-col>
                <p class="text" v-resize-text="{ratio: '1.0', minFontSize: '10px', maxFontSize: '20px', delay: '20'}">{{ $t("circular.invitation") }}</p>
            </b-col>
        </b-row>
            <b-row>
                <b-col>
                    <p id="large-names" class="text" v-resize-text="{ratio: '1.0', minFontSize: '15px', maxFontSize: '75px', delay: '20'}">Daniel & Patricia</p>
                </b-col>
            </b-row>
        <b-row>
            <b-col>
                <p class="text" v-resize-text="{ratio: '1.0', minFontSize: '10px', maxFontSize: '20px', delay: '20'}">{{ $t("circular.invitation2") }}</p>
                <p class="text" v-resize-text="{ratio: '1.0', minFontSize: '10px', maxFontSize: '20px', delay: '20'}">{{ $t("circular.invitation3") }}</p>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <hr id="vertical-divider">
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <p id="date" class="text" v-resize-text="{ratio: '1.0', minFontSize: '12px', maxFontSize: '45px', delay: '20'}">{{ $t("circular.date") }}</p>
            </b-col>
        </b-row>
    </b-container>
</template>
<script>
    import ResizeText from 'vue-resize-text';
    export default {
        name: 'circular-names',
        directives: {
            ResizeText,
        },
    };
</script>
<style scoped lang="less">
    @import "../style/App.less";
    //noinspection CssUnknownTarget
    @import (css) url('https://fonts.googleapis.com/css?family=Josefin+Sans');
    //noinspection CssUnknownTarget
    @import (css) url('https://fonts.googleapis.com/css?family=EB+Garamond');
    #first-row {
        margin-top: 100px;
    }
    #large-names {
        font-family: 'EB Garamond', sans-serif;
        letter-spacing: 8px;
    }
    #date {
        font-family: 'EB Garamond', sans-serif;
        letter-spacing: 8px;
    }
    .text {
        letter-spacing: 5px;
        color: @fontcolor;
        font-family: 'Josefin Sans', sans-serif;
    }

    .container {
        background-color: white;
        max-width: 750px;
    }

    #vertical-divider {
        border-top-width: 0;
        border-right-width: 1px;
        border-right-style: solid;
        border-color: @fontcolor;
        height: 80px;
        margin-right: 50%;
    }
</style>