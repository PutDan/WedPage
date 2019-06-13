<template>
    <div id="nav">
        <b-modal centered v-model="showGiftsModal" id="giftsModal">
            <template slot="modal-title">
                {{ $t("link.gift_registry") }}
            </template>
            <div class="d-block text-center" @click="">
                <h3>{{ $t("link.gift_password_text")}}</h3>
            </div>
            <b-button id="modal-button" class="mt-3" block href="https://hochzeits-tisch.de/tische/daniel%20draper-patricia%20djami">{{ $t("link.gift_registry_nav") }}<i id="link-icon" class="material-icons">link</i></b-button>
        </b-modal>
        <b-navbar id="navbar" toggleable="sm">
            <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
            <b-navbar-brand class="text" to="/home">Daniel&Putri</b-navbar-brand>
            <b-collapse is-nav id="nav_collapse">
                <b-navbar-nav>
                    <b-nav-item to="/home">{{ $t("link.home_link") }}</b-nav-item>
                    <b-nav-item to="/home" v-scroll-to="'#about'">{{ $t("link.about_link") }}</b-nav-item>
                    <b-nav-item href="https://docs.google.com/forms/d/e/1FAIpQLScv3t1Ugo3j7wURajMSGrt_NfEE8udQuTICwU8gs9Iwqmo-Gw/formResponse">{{ $t("link.rsvp_link") }}</b-nav-item>
                    <b-nav-item @click="showGiftsModal = true">{{ $t("link.gift_registry") }}</b-nav-item>
                    <b-nav-item to="/photos">{{ $t("link.photos_link") }}</b-nav-item>
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
        data()  {
            return {
                showGiftsModal: false,
            };
        },
    };
</script>
<style lang="less" scoped>
    @import "../style/App.less";

    //noinspection CssUnknownTarget
    @import (css) url('https://fonts.googleapis.com/icon?family=Material+Icons');

    .material-icons {
        cursor: pointer;
    }

    #divider {
        background-color: @image-background-color;
        margin-top: 0;
        padding-bottom: 2px;
    }
    #navbar {
        background-color: @background-color-components !important;
    }

    *, span {
        color: @fontcolor !important;
        letter-spacing: 0;
    }

    *:hover {
        color: @selectedlink !important;
    }

</style>
