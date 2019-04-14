<template>
    <b-container class="rounded">
        <b-row id="first-row">
            <b-col>
                <p class="text" v-resize-text="{ratio: '1.0', minFontSize: '5px', maxFontSize: '20px', delay: '20'}">{{ $t("invitation.headline") }}</p>
            </b-col>
        </b-row>
            <b-row>
                <b-col>
                    <p id="large-names" class="text" v-resize-text="{ratio: '1.0', minFontSize: '35px', maxFontSize: '75px', delay: '20'}">Daniel & Patricia</p>
                </b-col>
            </b-row>
        <b-row>
            <b-col>
                <p class="text" v-resize-text="{ratio: '1.0', minFontSize: '5px', maxFontSize: '20px', delay: '20'}">{{ $t("invitation.text") }}</p>
                <p class="text" v-resize-text="{ratio: '1.0', minFontSize: '5px', maxFontSize: '20px', delay: '20'}">{{ $t("invitation.textcont") }}</p>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <vertical-divider/>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <p id="date" class="text" v-resize-text="{ratio: '1.0', minFontSize: '12px', maxFontSize: '45px', delay: '20'}">{{ $t("invitation.date") }}</p>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <p class="text" v-resize-text="{ratio: '1.0', minFontSize: '5px', maxFontSize: '20px', delay: '20'}">{{ $t("invitation.location") }}</p>
            </b-col>
        </b-row>
        <b-row id="last-row">
            <b-col>
                <custom-button :target="'#'" :scrollTo="'#countdown'" :text-translation-id="'invitation.button'"/>
            </b-col>
        </b-row>
    </b-container>
</template>
<script>
    import ResizeText from 'vue-resize-text';
    import CustomButton from './CustomButton';
    import VerticalDivider from './VerticalDivider';

    export default {
        name: 'invitation',
        components: {VerticalDivider, CustomButton},
        directives: {
            ResizeText,
        },
    };
</script>
<!--suppress CssUnknownTarget -->
<style scoped lang="less">
    @import "../style/App.less";
    @import (css) url('https://fonts.googleapis.com/css?family=Josefin+Sans');
    @import (css) url('https://fonts.googleapis.com/css?family=EB+Garamond');
    #first-row {
        margin-top: 100px;
    }

    #large-names {
        font-family: 'EB Garamond', sans-serif;
        letter-spacing: 8px;
    }

    #date {
        font-family: 'EB Garamond', sans-serif;
        letter-spacing: 8px;
    }

    .text {
        letter-spacing: 5px;
        color: @fontcolor;
        font-family: 'Josefin Sans', sans-serif;
    }

    .container {
        background-color: @background-color-components;
        max-width: 750px;
        max-height: 750px;
        min-height: 750px;
    }

    #last-row {
        margin-top: 50px;
    }
</style>