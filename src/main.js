import Vue from "vue";
import App from "./App.vue";

import VueResource from "vue-resource";

import { MdButton, MdDrawer, MdCard } from "vue-material/dist/components";
import "vue-material/dist/vue-material.min.css";

Vue.use(VueResource);
Vue.http.options.root = "https://vue-domnoo-c3b76.firebaseio.com/";

Vue.use(MdButton);
Vue.use(MdDrawer);
Vue.use(MdCard);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App)
}).$mount("#app");
