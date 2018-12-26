<template>
    <parallax fixed="true">
        <img src="../assets/slide1.jpg">
        <vac :end-time="new Date('Jul 6 2019 00:00:00 GMT+1').getTime()" style="position:absolute;">
          <span slot="process"
                slot-scope="{ timeObj }">{{ `${$t("home.timer.process")}: ${timeObj.d}:${timeObj.h}:${timeObj.m}:${timeObj.s}` }}</span>
            <span slot="finish">{{ $t("home.timer.finish")}}</span>
        </vac>
    </parallax>
</template>

<script>
    import Parallax from 'vue-parallaxy'
    export default {
        components: {
            Parallax
        }
    }
</script>
