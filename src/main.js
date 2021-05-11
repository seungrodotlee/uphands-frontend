import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Buefy from "buefy";
import Icon from "./components/Icon.vue";
import Logo from "./components/Logo.vue";
import Spacer from "./components/Spacer.vue";
import "./assets/main.scss";

Vue.config.productionTip = false;
Vue.use(Buefy);
Vue.component("icon", Icon);
Vue.component("logo", Logo);
Vue.component("spacer", Spacer);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
