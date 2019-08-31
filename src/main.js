import Vue from "vue";
import App from "@/App.vue";
import router from "@/router/index.js";
import store from "@/store/index.js";
import { i18n } from "@/plugins/i18n";
import { translation } from "./plugins/translation";
import "@/registerServiceWorker";

// global components
import Default from "@/layouts/Default";

// global styles
import "@/assets/scss/app.scss";

Vue.config.productionTip = false;
Vue.prototype.$i18nRoute = translation.i18nRoute.bind(translation);

// register global components
Vue.component("default-layout", Default);

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");
