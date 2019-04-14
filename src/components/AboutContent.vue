<template>
    <div class="my-container-fluid" id="about-container">
        <b-container fluid id="about-content">
            <a id="about"></a>
            <b-row id="first-row">
                <b-col>
                    <p id="headline" v-resize-text="{ratio: '1.0', minFontSize: '25px', maxFontSize: '45px', delay: '20'}">{{ $t("about.headline") }}</p>
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                    <vertical-divider />
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                    <PersonContentLeft :name="name1"/>
                </b-col>
                <b-col>
                    <PersonContentRight :name="name2"/>
                </b-col>
            </b-row>
            <br />
            <how-we-met/>
        </b-container>
    </div>
</template>
<script>
    import PersonContentLeft from './PersonContentLeft';
    import PersonContentRight from './PersonContentRight';
    import HowWeMet from './HowWeMet';
    import VerticalDivider from './VerticalDivider';

    const name1 = 'putri';
    const name2 = 'daniel';

    export default {
        name: 'about-content',
        components: {VerticalDivider, HowWeMet, PersonContentLeft, PersonContentRight},
        data() {
            return {
                name1,
                name2,
            };
        },
    };
</script>
<style scoped lang="less">
    @import "../style/App.less";
    //noinspection CssUnknownTarget
    @import (css) url('https://fonts.googleapis.com/css?family=EB+Garamond');
    #first-row {
        margin-top: 100px;
    }

    #headline {
        color: @fontcolor;
        font-family: 'EB Garamond', sans-serif;
    }
    #about-content {
        color: black;
        background-color: @background-color-components;
        overflow: visible;
    }

    .my-container-fluid {
        width: 100%;
        padding-right: 0;
        padding-left: 0;
        margin-right: auto;
        margin-left: auto;
    }

</style>