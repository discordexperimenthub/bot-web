import { createApp } from "vue";
import Vue3Marquee from "vue3-marquee";

import "../src/assets/css/style.css";

import App from "./App.vue";
import router from "./router/index";

import { i18n as initi18n } from "./i18n";

const app = createApp(App);
const i18n = initi18n;

app.use(i18n);
app.use(router);
app.use(Vue3Marquee);

app.mount("#app");