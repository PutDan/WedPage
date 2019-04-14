<template>
    <b-col>
        <b-row>
            <b-col>
                <p class="title" v-resize-text="{ratio: '1.0', minFontSize: '25px', maxFontSize: '45px', delay: '20'}">{{ $t('person.' + name + '.title') }}</p>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <personAvatar :name="name"/>
            </b-col>
        </b-row>
    </b-col>
</template>
<script>
    import personAvatar from './PersonAvatar'

    export default {
        name: 'person-title',
        components: {personAvatar},
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