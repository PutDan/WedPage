<template>
    <b-container fixed id="about-content" class="border border-warning">
        <b-row>
            <b-col class="border-right">
                <PersonContent/>
            </b-col>
            <b-col>
                <PersonContent/>

            </b-col>
        </b-row>
    </b-container>
</template>
<script>
    import PersonContent from "./PersonContent";

    export default {
        name: 'about-content',
        components: {PersonContent}
    }
</script>
<style scoped lang="less">
    @import "../style/App.less";
    //noinspection CssUnknownTarget
    @import (css) url('https://fonts.googleapis.com/css?family=Charm');

    .border {
        color: black;
        background-color: whitesmoke;
    }
</style>