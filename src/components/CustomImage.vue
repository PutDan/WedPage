<template>
    <b-container id="container">
        <b-img thumbnail rounded="circle" :src="require('../assets/' + name)"></b-img>
    </b-container>
</template>
<script>
    export default {
        name: 'customImage',
        props: {
            name: {}
        }
    }
</script>
<style scoped lang="less">
    @import "../style/App.less";

    #container {
        max-width: 350px;
        max-height: 450px;
        background-color: @image-background-color;
    }
</style>