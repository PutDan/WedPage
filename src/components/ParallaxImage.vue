<template>
    <parallax fixed>
        <img src="../assets/slide1.jpg" alt="Daniel and Putri are getting married">
    </parallax>
</template>

<script>
    import Parallax from 'vue-parallaxy';
    export default {
        components: {
            Parallax,
        },
    };
</script>

<style scoped lang="less">
    img {
        ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=60)";       /* IE 8 */
        filter: alpha(opacity=60);  /* IE 5-7 */
        -moz-opacity: 0.6;          /* Netscape */
        -khtml-opacity: 0.6;        /* Safari 1.x */
        opacity: 0.6;
    }
</style>
