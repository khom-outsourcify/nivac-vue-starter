import Vue from "vue";
import App from "@/App.vue";
import router from "@/router/index.js";
import store from "@/store/index.js";
import "@/registerServiceWorker";

import { i18n } from "@/plugins/i18n";
import { translation } from "./plugins/translation";

Vue.config.productionTip = false;
Vue.prototype.$i18nRoute = translation.i18nRoute.bind(translation);

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");
