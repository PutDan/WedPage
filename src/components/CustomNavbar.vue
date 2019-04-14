<template>
    <div id="nav">
        <b-navbar id="navbar" toggleable="sm" variant="dark" type="dark" sticky>
            <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
            <b-navbar-brand to="/home">Daniel&Putri</b-navbar-brand>
            <b-collapse is-nav id="nav_collapse">
                <b-navbar-nav>
                    <b-nav-item to="/home">{{ $t("link.home_link") }}</b-nav-item>
                    <b-nav-item to="/home" v-scroll-to="'#about'">{{ $t("link.about_link") }}</b-nav-item>
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
        <hr id="divider">
    </div>
</template>
<script>
    export default {
        name: 'custom-navbar',
        props: {
            activeDe: {},
            activeEn: {},
            activeIn: {},
            iconDe: {},
            iconEn: {},
            iconIn: {},
            selectLanguage: {},
        },
    };
</script>
<style lang="less" scoped>
    @import "../style/App.less";

    #divider {
        background-color: @greenfont;
        margin-top: 0;
        padding-bottom: 2px;
    }
    #navbar {
        background-color: @background-color !important;
    }

</style>