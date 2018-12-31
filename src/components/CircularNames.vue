<template>
    <b-container>
        <b-row>
            <b-col>
                <h1 id="circularNames" class="circular" v-resize-text="{ratio: '1.0', minFontSize: '15px', maxFontSize: '75px', delay: '20'}">Daniel & Putri</h1>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <h1 id="circularText" class="circular" v-resize-text="{ratio: '1.0', minFontSize: '15px', maxFontSize: '75px', delay: '20'}">{{ $t("circular.headline") }}</h1>
            </b-col>
        </b-row>
    </b-container>

</template>
<script>
    import CircleType from 'circletype';
    import ResizeText from 'vue-resize-text';
    let circleTypeNames = null;
    export default {
        name: 'circular-names',
        mounted() {
            circleTypeNames = new CircleType(document.getElementById('circularNames'));
            circleTypeNames.radius(250).dir(1);
        },
        updated() {
            circleTypeNames.refresh();
        },
        directives: {
            ResizeText,
        },
    };
</script>
<style scoped lang="less">
    @import "../style/App.less";
    //noinspection CssUnknownTarget
    @import (css) url('https://fonts.googleapis.com/css?family=Charm');
    .circular {
        color: @richgold;
        font-family: 'Charm', cursive;
        font-size: 65px;
    }
    #circularText {
        margin-top: 170px;
    }
</style>