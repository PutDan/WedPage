<!--This vue-"class" controls the entire website-->
<template>
    <div id="app">
        <div id="nav">
            <b-navbar id="navbar" toggleable="md" variant="info" type="dark">
                <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
                <b-navbar-brand to="/home">Daniel&Putri</b-navbar-brand>
                <b-collapse is-nav id="nav_collapse">
                    <b-navbar-nav>
                        <b-nav-item to="/home">{{ $t("link.home_link") }}</b-nav-item>
                        <b-nav-item to="/about">{{ $t("link.about_link") }}</b-nav-item>
                        <b-nav-item to="/rsvp">{{ $t("link.rsvp_link") }}</b-nav-item>
                        <b-nav-item to="/photos" disabled>{{ $t("link.photos_link") }}</b-nav-item>
                    </b-navbar-nav>
                    <!-- Right aligned nav items -->
                    <b-navbar-nav class="ml-auto">
                        <b-nav-item-dropdown v-bind:text="$t('link.languages')" right>
                            <b-dropdown-item class="locale_en" v-bind:disabled="activeEn" v-on:click="selectLanguage">
                                <b-container class="locale_en">
                                    <b-row class="locale_en">
                                        <b-col class="locale_en">EN</b-col>
                                        <b-col class="locale_en">
                                            <b-img class="locale_en" width="25" height="25" :src="iconEn"></b-img>
                                        </b-col>
                                    </b-row>
                                </b-container>
                            </b-dropdown-item>
                            <b-dropdown-item class="locale_de" v-bind:disabled="activeDe" v-on:click="selectLanguage">
                                <b-container class="locale_de">
                                    <b-row class="locale_de">
                                        <b-col class="locale_de">DE</b-col>
                                        <b-col class="locale_de">
                                            <b-img class="locale_de" width="25" height="25" :src="iconDe"></b-img>
                                        </b-col>
                                    </b-row>
                                </b-container>
                            </b-dropdown-item>
                            <b-dropdown-item class="locale_in" v-bind:disabled="activeIn" v-on:click="selectLanguage">
                                <b-container class="locale_in">
                                    <b-row class="locale_in">
                                        <b-col class="locale_in">IN</b-col>
                                        <b-col class="locale_in">
                                            <b-img class="locale_in" width="25" height="25" :src="iconIn"></b-img>
                                        </b-col>
                                    </b-row>
                                </b-container>
                            </b-dropdown-item>
                        </b-nav-item-dropdown>
                    </b-navbar-nav>
                </b-collapse>
            </b-navbar>
        </div>
        <router-view/>
    </div>
</template>

<script>
    import iconEn from 'svg-country-flags/svg/us.svg';
    import iconDe from 'svg-country-flags/svg/de.svg';
    import iconIn from 'svg-country-flags/svg/id.svg';
    import Vue from 'vue';

    export default {
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
        background-color: @deepgreen !important;
        align-content: center;
    }

    #navbar {
        background-color: @deepgreen !important;
        color: @deepgreen !important;
    }

    #rsvp-container {
        text-align: center;
    }

    #rsvp-form {
        display: inline-block;
    }

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: @richgold;
    }
</style>
