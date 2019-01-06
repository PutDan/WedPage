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
        <div class="center-con d-none d-md-flex">
            <div class="round">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
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
    .center-con {
        display: flex;
        height: 25vh;
        align-items: center;
        justify-content: center;
        margin-bottom: 50px;
    }

    .round {
        position: relative;
        border: 3px solid #fff;
        width: 100px;
        height: 100px;
        border-radius: 100%;
    }

    span {
        z-index: 999;
        height: 3px;
        margin:1px;
        width: 30px;
        background: #fff;
        transition: 0.4s ease;
    }

    span:first-child {
        display: block;
        position: absolute;
        transform: rotate(45deg);
        left: 25%;
        bottom: 35%;
    }

    span:nth-child(2) {
        display: block;
        position: absolute;
        transform: rotate(-45deg);
        left: 45%;
        bottom: 35%;
    }

    span:nth-child(3) {
        display: block;
        position: absolute;
        transform: rotate(45deg);
        left: 25%;
        bottom: 54%;
    }

    span:nth-child(4) {
        display: block;
        position: absolute;
        transform: rotate(-45deg);
        left: 45%;
        bottom: 54%;
    }

    .round:hover span:nth-child(1) {
        transform: rotate(-135deg);
    }

    .round:hover span:nth-child(2) {
        transform: rotate(135deg);
    }

    .round:hover span:nth-child(3) {
        transform: rotate(225deg);
    }

    .round:hover span:nth-child(4) {
        transform: rotate(-225deg);
    }
</style>