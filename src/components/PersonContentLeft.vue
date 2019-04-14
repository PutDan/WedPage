<template>
    <b-container id="container">
        <b-row>
            <person-title id="margin" :name="name" :align="'right'"/>
        </b-row>
        <b-row><br /></b-row>
    </b-container>
</template>
<script>
    import PersonText from './PersonText';
    import PersonTitle from './PersonTitle';

    export default {
        name: 'PersonContentLeft',
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

    #margin {
        margin-right: 0;
        margin-left: 0;
    }

</style>