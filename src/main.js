import BootstrapVue from 'bootstrap-vue';
import App from './App.vue';
import router from './router';
import './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import Vue from 'vue';
import Vuex from 'vuex';
import vuexI18n from 'vuex-i18n';
import vueAwesomeCountdown from 'vue-awesome-countdown';
import vueResizeText from 'vue-resize-text';
import AOS from 'aos';
import 'aos/dist/aos.css';
import VueMouseParallax from 'vue-mouse-parallax';
import VueScrollTo from 'vue-scrollto';
Vue.use(VueMouseParallax);
Vue.use(VueScrollTo);
Vue.use(Vuex);
const store = new Vuex.Store({});
Vue.use(vuexI18n.plugin, store);
import translationsEn from './locale/translations_en';
import translationsDe from './locale/translations_de';
import translationsIn from './locale/translations_in';
Vue.i18n.add('en', translationsEn);
Vue.i18n.add('de', translationsDe);
Vue.i18n.add('in', translationsIn);
// set the start locale to use
Vue.i18n.set('en');
Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(vueAwesomeCountdown, 'vac');
Vue.use(vueResizeText);
// noinspection JSUnusedGlobalSymbols
new Vue({
    created() {
        AOS.init();
    },
    router,
    store,
    render: (h) => h(App),
}).$mount('#app');
//# sourceMappingURL=main.js.map