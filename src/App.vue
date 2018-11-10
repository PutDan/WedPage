<!--This vue-"class" controls the entire website-->
<template>
    <div id="app">
        <div id="nav">
            <b-navbar toggleable="md" variant="info" type="dark">
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
                        <b-nav-item-dropdown text="Language" right>
                            <b-dropdown-item class="locale_en" v-on:click="selectLanguage">
                                <b-container class="locale_en">
                                    <b-row class="locale_en">
                                        <b-col class="locale_en">EN</b-col>
                                        <b-col class="locale_en">
                                            <b-img class="locale_en" width="25" height="25" :src="iconEn"></b-img>
                                        </b-col>
                                    </b-row>
                                </b-container>
                            </b-dropdown-item>
                            <b-dropdown-item class="locale_de" v-on:click="selectLanguage">
                                <b-container class="locale_de">
                                    <b-row class="locale_de">
                                        <b-col class="locale_de">DE</b-col>
                                        <b-col class="locale_de">
                                            <b-img class="locale_de" width="25" height="25" :src="iconDe"></b-img>
                                        </b-col>
                                    </b-row>
                                </b-container>
                            </b-dropdown-item>
                            <b-dropdown-item class="locale_in" v-on:click="selectLanguage">
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
    //v-bind:class="{ lang_active: activeEn }"
    //v-bind:class="{ lang_active: activeDe }"
    //v-bind:class="{ lang_active: activeIn }"
    import iconEn from 'svg-country-flags/svg/us.svg';
    import iconDe from 'svg-country-flags/svg/de.svg';
    import iconIn from 'svg-country-flags/svg/id.svg';
    import Vue from 'vue';

    const currentLanguage = Vue.i18n.locale();

    export default {
        data() {
            return {
                iconDe,
                iconEn,
                iconIn,
            };
        },
        /* computed: {
            activeEn() {
                return currentLanguage === 'en';
            },
            activeDe() {
                return currentLanguage === 'de';
            },
            activeIn() {
                return currentLanguage === 'in';
            },
        },*/
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
    /** This is the color scheme for the page*/
    @deepgreen: #0d1e06;
    @intensivered: #6d1127;
    @richgold: #e8b910;
    @woodbrown: #664510;
    @activenav: #ffd84d;
    @linkedel: #ba825f;
    @flowerred: #8C151D;

    html {
        text-align: center;
    }

    body {
        background-color: @deepgreen !important;
        align-content: center;
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
