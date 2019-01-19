<template>
    <b-container>
        <b-row>
            <b-col>
                <h1 id="title">{{ $t('met.title') }}</h1>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <p id="description">{{ $t('met.description') }}</p>
            </b-col>
        </b-row>
    </b-container>
</template>
<script>
    export default {
        name: 'how-we-met'
    }
</script>
<style scoped lang="less">
    @import "../style/App.less";
    //noinspection CssUnknownTarget
    @import (css) url('https://fonts.googleapis.com/css?family=Charm');

    #title {
        font-family: 'Charm', cursive;
        color: @richgold;
    }

</style>