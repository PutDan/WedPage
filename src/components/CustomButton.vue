<template>
    <button id="button" class="text" :href="target" :to="linkTo" v-scroll-to="scrollTo">
        <span id="button-text" v-resize-text="{ratio: '1.0', minFontSize: '20px', maxFontSize: '30px', delay: '20'}">{{ $t(textTranslationId) }}</span>
    </button>
</template>
<script>
    export default {
        name: 'custom-button',
        props: {
            target: {},
            scrollTo: {},
            textTranslationId: {},
            linkTo: {},
        },
    }
</script>
<style scoped lang="less">
    @import "../style/App.less";
    //noinspection CssUnknownTarget
    @import (css) url('https://fonts.googleapis.com/css?family=Josefin+Sans');
    .text {
        letter-spacing: 5px;
        color: @fontcolor;
        font-family: 'Josefin Sans', sans-serif;
    }

    #button {
        color: @fontcolor;
        letter-spacing: normal;
        background-color: transparent;
        border: solid 1px @fontcolor;
    }

    #button-text {
        margin: 25px 25px 25px 25px;
    }

    #button:hover {
        background-color: @fontcolor;
        color: white;
    }

</style>