<template>
    <footer id="footer">
        <hr id="divider">
        <p>
            {{ $t("footer.by" )}} <a href="https://github.com/Germandrummer92">@Germandrummer92</a> {{ $t("footer.and") }}
            <a href="https://github.com/Mnkywlkr">@Mnkywlkr</a></p>
        <p>
            <router-link tag="a" class-active="active" to="/copyright" exact> © 2018-2019 {{ $t("footer.copyright_link")}}</router-link>
        </p>
    </footer>
</template>
<script>
    export default {
        name: 'custom-footer',
    };
</script>
<style scoped lang="less">
    @import "../style/App.less";

    html {
        text-align: center;
    }

    #footer {
        background-color: @background-color-components;
        padding-bottom: 5px;
    }

    #divider {
        background-color: @image-background-color;
        padding-bottom: 2px;
    }

    a {
        color: @fontcolor;
    }

    a:hover {
        color: @selectedlink !important;
    }

    a:visited {
        color: @visitedlink;
    }

</style>