import { createApp } from "vue";
import Vue3Marquee from "vue3-marquee";

import {
  applyPolyfills,
  defineCustomElements,
} from "@skyra/discord-components-core/loader";
import type { DiscordMessageOptions } from "@skyra/discord-components-core";

import "../src/assets/css/style.css";

import App from "./App.vue";
import router from "./router/index";

import { i18n as initi18n } from "./i18n";

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUserSecret)

//TODO icons arent accessable at the moment

const app = createApp(App);
const i18n = initi18n;

app.config.compilerOptions.isCustomElement = (tag) => /discord-\w*/.test(tag);

applyPolyfills().then(() => {
  defineCustomElements();
});

app.use(i18n);
app.use(router);
app.use(Vue3Marquee);

app.component('font-awesome-icon', FontAwesomeIcon)

window.$discordMessage = {
  profiles: {
    dehBot: {
      bot: true,
      verified: false,
      avatar: "/logo.png",
      author: "Experiment Hub",
      roleColor: "rgba(84, 97, 242, 1)",
    },
    voron: {
      bot: false,
      verified: false,
      avatar: "/voroniyx.png",
      author: "Voroniyx",
      roleColor: "#f8db29",
    },
    voronWebhook: {
      bot: true,
      verified: false,
      avatar: "/voroniyx.png",
      author: "Voroniyx",
      roleColor: "#ffffff",
    },
    dehBotWebhook: {
		bot: true,
		verified: false,
		avatar: "/logo.png",
		author: "Experiment Hub",
		roleColor: "#ffffff",
    },
  },
};

app.mount("#app");

declare global {
  interface Window {
    $discordMessage: DiscordMessageOptions;
  }
}
