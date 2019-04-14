<template>
    <b-col>
        <b-row>
            <b-col>
                <p class="title" v-resize-text="{ratio: '1.0', minFontSize: '25px', maxFontSize: '45px', delay: '20'}">{{ $t('person.' + name + '.title') }}</p>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <customImage :name="name + '.png'"/>
            </b-col>
        </b-row>
    </b-col>
</template>
<script>
    import customImage from './CustomImage'

    export default {
        name: 'person-title',
        components: {customImage},
        props: {
            name: {}
        }
    }
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