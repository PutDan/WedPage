<template>
    <b-col class="text-content">
        <b-row>
            <p id="name" class="d-none d-md-block" v-resize-text="{ratio: '1.0', minFontSize: '10px', maxFontSize: '22px', delay: '20'}">{{ $t('person.' + name + '.description') }}</p>
        </b-row>
        <b-row class="d-none d-sm-block" v-resize-text="{ratio: '1.0', minFontSize: '8px', maxFontSize: '15px', delay: '20'}"><p><b>*</b> {{ $t('person.' + name + '.born') }}</p></b-row>
    </b-col>
</template>
<script>
    export default {
        name: 'person-text',
        props: {
            name: {}
        }
    }
</script>
<style scoped lang="less">
    @import "../style/App.less";

    .text-content {
        text-align: center;
        margin-top: 10%;
    }

    #name {
        overflow: visible;
    }

</style>