<template>
    <hr class="d-none d-md-block" id="vertical-divider">
</template>
<script>
    export default {
        name: 'vertical-divider',
    };
</script>
<style scoped lang="less">
    @import "../style/App.less";

    #vertical-divider {
        border-top-width: 0;
        border-right-width: 1px;
        border-right-style: solid;
        border-color: @fontcolor;
        height: 80px;
        margin-right: 50%;
    }

</style>