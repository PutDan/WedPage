<template>
    <b-container fixed>
        <b-row>
            <b-col>
                <b-img fluid :src="require('../assets/putri.png')"></b-img>
            </b-col>
            <p> personname </p>
        </b-row>
    </b-container>
</template>
<script>
    export default {
        name: 'PersonContent'
    }
</script>
<style scoped lang="less">
    @import "../style/App.less";
    //noinspection CssUnknownTarget
    @import (css) url('https://fonts.googleapis.com/css?family=Charm');

</style>