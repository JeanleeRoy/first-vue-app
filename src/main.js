import Vue from "vue";
import App from "./App.vue";
import {} from "@/assets/main.scss";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
