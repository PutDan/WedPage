<template>
    <div id="app">
        <div class="content">
            <custom-navbar id="navbar" :active-de="activeDe" :active-en="activeEn" :active-in="activeIn" :icon-de="iconDe"
                          :icon-en="iconEn" :icon-in="iconIn" :select-language="selectLanguage"/>
            <router-view/>
            <div class="push"></div>
        </div>
        <custom-footer class="footer"/>
    </div>
</template>

<script>
    import iconEn from 'svg-country-flags/svg/us.svg';
    import iconDe from 'svg-country-flags/svg/de.svg';
    import iconIn from 'svg-country-flags/svg/id.svg';
    import Vue from 'vue';
    import CustomNavbar from './components/CustomNavbar';
    import CustomFooter from './components/CustomFooter';

    export default {
        components: {CustomFooter, CustomNavbar },
        data() {
            return {
                iconDe,
                iconEn,
                iconIn,
            };
        },
         computed: {
            activeEn() {
                return Vue.i18n.locale() === 'en';
            },
            activeDe() {
                return Vue.i18n.locale() === 'de';
            },
            activeIn() {
                return Vue.i18n.locale() === 'in';
            },
        },
        methods: {
            selectLanguage(event) {
                if (event.target.className.includes('locale_en')) {
                    Vue.i18n.set('en');
                } else if (event.target.className.includes('locale_de')) {
                    Vue.i18n.set('de');
                } else if (event.target.className.includes('locale_in')) {
                    Vue.i18n.set('in');
                }
            },
        },
    };
</script>

<style lang="less">
    @import "style/App.less";
    html {
        text-align: center;
    }

    body {
        background-color: @background-color !important;
    }

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: @greenfont;
    }

    .content {
        min-height: calc(100vh - 120px);
    }
    .footer {
        height: 100px;
    }

</style>
