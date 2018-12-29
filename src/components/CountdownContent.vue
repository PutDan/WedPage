<template>
    <div id="container" class="border-warning">
        <b-jumbotron id="home-header" border-variant="warning" class="charm">
            <template slot="header">
                <img src="../assets/wedding-rings.svg" height="75px" alt="Wedding time" />{{ $t("home.title") }} <img src="../assets/wedding-rings.svg" height="75px" alt="Wedding time" /></template>
            <template slot="lead">
                <vac :end-time="new Date('Jul 6 2019 00:00:00 GMT+1').getTime()">
          <span slot="process"
                slot-scope="{ timeObj }">{{ `${$t("home.timer.process")}: ${timeObj.d}:${timeObj.h}:${timeObj.m}:${timeObj.s}` }}</span>
                    <span slot="finish">{{ $t("home.timer.finish")}}</span>
                </vac>
            </template>
            <hr class="my-4">
            <p>
                It uses utility classes for typography and spacing to space content
                out within the larger container.
            </p>
            <b-btn variant="primary" href="#">Do Something</b-btn>
            <b-btn variant="success" href="#">Do Something Else</b-btn>
        </b-jumbotron>
    </div>
</template>
<script>
    export default {
        name: 'countdown-content',
    };
</script>


<style scoped lang="less">
    @import "../style/App.less";
    //noinspection CssUnknownTarget
    @import (css) url('https://fonts.googleapis.com/css?family=Charm');

    .charm {
        font-family: 'Charm', cursive;
    }

    .my-4 {
        background-color: @richgold;
    }
</style>