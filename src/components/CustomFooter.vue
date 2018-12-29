<template>
    <div id="footer">
        <hr id="divider">
        <p>
            {{ $t("footer.by" )}} <a href="https://github.com/Germandrummer92">@Germandrummer92</a> {{ $t("footer.and") }}
            <a href="https://github.com/Mnkywlkr">@Mnkywlkr</a></p>
        <p>
            <router-link tag="a" class-active="active" to="/copyright" exact> © 2018-2019 {{ $t("footer.copyright_link")}}</router-link>
        </p>
    </div>
</template>
<script>
    export default {
        name: 'custom-footer'
    }
</script>
<style scoped lang="less">
    @import "../style/App.less";

    html {
        text-align: center;
    }

    #footer {
        background-color: @deepgreen;
        padding-bottom: 5px;
    }

    #divider {
        background-color: @richgold;
        padding-bottom: 2px;
    }

</style>