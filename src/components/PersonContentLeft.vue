<template>
    <b-container id="container" fixed>
        <b-row>
            <person-text :name="name"/>
            <person-title :name="name"/>
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

</style>