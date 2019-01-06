<template>
    <div id="container">
        <b-container fixed id="about-content" class="rounded border border-warning">
            <a id="about"></a>
            <b-row class="border-bottom">
                <b-col class="border-right">
                    <PersonContent :name="name1"/>
                </b-col>
                <b-col>
                    <PersonContent :name="name2"/>
                </b-col>
            </b-row>
            <br />
            <b-row>
                <b-col>
                    <h1 id="title">{{ $t('about.met') }}</h1>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>
<script>
    import PersonContent from './PersonContent';
    const name1 = 'putri';
    const name2 = 'daniel';

    export default {
        name: 'about-content',
        components: {PersonContent},
        data() {
            return {
                name1,
                name2,
            };
        },
    };
</script>
<style scoped lang="less">
    @import "../style/App.less";
    //noinspection CssUnknownTarget
    @import (css) url('https://fonts.googleapis.com/css?family=Charm');

    #about-content {
        color: black;
        background-color: @deepgreen;
        padding: 5px;
        ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=90)";       /* IE 8 */
        filter: alpha(opacity=90);  /* IE 5-7 */
        -moz-opacity: 0.9;          /* Netscape */
        -khtml-opacity: 0.9;        /* Safari 1.x */
        opacity: 0.9;
        overflow: hidden;
    }

    #title {
        font-family: 'Charm', cursive;
        color: @richgold;
    }

</style>