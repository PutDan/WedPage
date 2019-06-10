<template>
    <b-container id="container" :class="{ rightAligned: align === 'right', leftAligned: align === 'left'}">
        <b-img id="image" fluid :src="require('../assets/' + name)"></b-img>
    </b-container>
</template>
<script>
    export default {
        name: 'customImage',
        props: {
            name: {},
            align: {},
        },
    };
</script>
<style scoped lang="less">
    @import "../style/App.less";

    #container {
        max-width: 250px;
        max-height: 450px;
        background-color: @image-background-color;
    }

    .rightAligned {
        margin-right: 0;
    }

    .leftAligned {
        margin-left: 0;
    }

    #image {
        padding-top: 20px;
    }

</style>