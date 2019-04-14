<template>
    <b-container fluid id="container">
        <b-row>
            <b-col>
                <div class="description">
                    <p>{{ $t('met.description1') }}</p>
                </div>
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
    @import (css) url('https://fonts.googleapis.com/css?family=Josefin+Sans');

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

    .text {
        letter-spacing: 5px;
        color: @fontcolor;
        font-family: 'Josefin Sans', sans-serif;
    }

    .description {
        font: normal normal normal 16px/1.4em brandon-grot-w01-light,sans-serif;
        margin-top: 50px;
        max-width: 600px;
        margin-right: auto;
        margin-left: auto;
    }

</style>