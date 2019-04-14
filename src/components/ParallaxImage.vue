<template>
    <parallax fixed>
        <img src="../assets/background-leaves.png" alt="Daniel and Putri are getting married">
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
        background-repeat: round;
    }
</style>
