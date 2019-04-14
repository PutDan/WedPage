<template>
    <b-container id="container">
        <b-row>
            <person-title :name="name" :align="'left'"/>
        </b-row>
    </b-container>
</template>
<script>
    import PersonText from './PersonText';
    import PersonTitle from './PersonTitle';

    export default {
        name: 'PersonContentRight',
        components: {PersonTitle, PersonText},
        props: {
            name: {},
        },
    };
</script>
<style scoped lang="less">
    @import "../style/App.less";
    #container {
        color: @fontcolor;
    }
</style>