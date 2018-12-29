<template>
    <h1 id="names">Daniel & Putri</h1>
</template>
<script>
    import CircleType from 'circletype';
    export default {
        name: 'circular-names',
        mounted() {
            const circleType = new CircleType(document.getElementById('names'));
            circleType.radius(200).dir(1);
        }
    }
</script>
<style scoped lang="less">
    @import "../style/App.less";
    //noinspection CssUnknownTarget
    @import (css) url('https://fonts.googleapis.com/css?family=Charm');
    #names {
        color: @richgold;
        font-family: 'Charm', cursive;
    }
</style>