<template>
    <b-container id="container" fixed>
        <b-row>
            <b-col>
                <b-col><h1 id="title">{{ $t('person.' + name + '.title') }}</h1></b-col>
                <parallax-container id="avatar">
                    <parallax-element  class="background-image" :parallaxStrength="2" :type="'depth'">
                        <b-img v-if="name === 'putri'" thumbnail rounded="circle" height="100x" :src="require('../assets/putri.png')"></b-img>
                        <b-img v-else="name === 'putri'" thumbnail rounded="circle"  :src="require('../assets/daniel.png')"></b-img>
                    </parallax-element>
                </parallax-container>
            </b-col>
            <b-col id="text-content">
                <b-row><h4>{{ $t('person.' + name + '.description') }}</h4></b-row>
                <br />
                <b-row><p><b>*</b> {{ $t('person.' + name + '.born') }}</p></b-row>
            </b-col>
        </b-row>
        <b-row><br /></b-row>
    </b-container>
</template>
<script>
    export default {
        name: 'PersonContent',
        props: {
            name: {},
        },
    };
</script>
<style scoped lang="less">
    @import "../style/App.less";
    //noinspection CssUnknownTarget
    @import (css) url('https://fonts.googleapis.com/css?family=Lato');
    //noinspection CssUnknownTarget
    @import (css) url('https://fonts.googleapis.com/css?family=Charm');


    #container {
        color: @fontcolor;
    }
    #text-content {
        text-align: right;
        font-family: 'Lato', sans-serif;
    }

    #title {
        font-family: 'Charm', cursive;
    }

    #avatar {
        float: left;
    }

</style>