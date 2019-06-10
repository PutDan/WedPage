<template>
    <b-col>
        <b-row>
            <b-col>
                <customImage :name="name + '.png'" :align="align"/>
            </b-col>
        </b-row>
    </b-col>
</template>
<script>
    import customImage from './CustomImage';

    export default {
        name: 'person-title',
        components: {customImage},
        props: {
            name: {},
            align: {},
        },
    };
</script>
<style scoped lang="less">
    @import "../style/App.less";
    //noinspection CssUnknownTarget
    @import (css) url('https://fonts.googleapis.com/css?family=EB+Garamond');

    .title {
        font-family: 'EB Garamond', sans-serif;
        letter-spacing: 8px;
    }

</style>