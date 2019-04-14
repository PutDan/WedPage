<template>
    <b-container id="container">
        <b-img thumbnail rounded="circle" :src="require('../assets/' + name +'.png')"></b-img>
    </b-container>
</template>
<script>
    export default {
        name: 'personAvatar',
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