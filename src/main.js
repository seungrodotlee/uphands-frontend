import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Buefy from "buefy";
import Axios from "axios";

import Icon from "./components/Icon.vue";
import Logo from "./components/Logo.vue";
import Spacer from "./components/Spacer.vue";
import ListBuilder from "./components/ListBuilder.vue";
import "./assets/main.scss";

Vue.prototype.$axios = Axios;
Vue.config.productionTip = false;
Vue.use(Buefy);
Vue.component("icon", Icon);
Vue.component("logo", Logo);
Vue.component("spacer", Spacer);
Vue.component("list-builder", ListBuilder);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
