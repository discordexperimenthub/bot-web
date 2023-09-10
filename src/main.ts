import { createApp } from "vue";
import Vue3Marquee from "vue3-marquee";

import { applyPolyfills, defineCustomElements } from '@skyra/discord-components-core/loader';
import type { DiscordMessageOptions } from '@skyra/discord-components-core';


import "../src/assets/css/style.css";

import App from "./App.vue";
import router from "./router/index";

import { i18n as initi18n } from "./i18n";

const app = createApp(App);
const i18n = initi18n;

app.config.compilerOptions.isCustomElement = tag => /discord-\w*/.test(tag);

applyPolyfills().then(() => {
	defineCustomElements();
});

app.use(i18n);
app.use(router);
app.use(Vue3Marquee);

window.$discordMessage = {
	profiles: {
		dehBot: {
			bot:true,
			verified:true,
			avatar:"/logo.png",
			author:"Experiment Hub",
			roleColor:"rgba(84, 97, 242, 1)",
		},
        voron: {
			bot:false,
			verified:false,
			avatar:"/voroniyx.png",
			author:"Voroniyx",
			roleColor:"#f8db29",
        },
		// skyra: {
		// 	author: 'Skyra',
		// 	avatar: 'https://github.com/NM-EEA-Y.png',
		// 	bot: true,
		// 	verified: true,
		// 	roleColor: '#1e88e5'
		// },
		// favna: {
		// 	author: 'Favna',
		// 	avatar: 'https://github.com/favna.png',
		// 	roleColor: '#ff0000'
		// }
	}
};

app.mount("#app");

declare global {
	interface Window {
		$discordMessage: DiscordMessageOptions;
	}
}