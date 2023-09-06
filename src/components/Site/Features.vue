import { pathToFileURL } from 'url';
<template>
  <div class="m-8">
    <section
      id="content-toggle"
      class="flex flex-wrap align-middle justify-center lg:inline-flex bg-deh-border rounded p-2 m-2 lg:w-[45%]"
    >
      <div class="text-deh-main">
        <div class="font-bold text-2xl">
          <template v-for="feature in Feautures">
            <button class="flex flex-wrap align-middle justify-center">
              <img
                :src="feature.image.url"
                class="inline-flex w-5 h-5 mt-[10px]"
              />
              <span class="underline underline-offset-2 text-white drop-shadow-md shadow-emerald-400">{{
                $t(feature.title)
              }}</span>
            </button>
          </template>

          <!-- <span v-if="feature.beta" class="px-1 text-base text-white bg-deh-main m-1 rounded border text-center">BETA</span> -->
        </div>
      </div>
    </section>

    <section
      id="content-window"
      class="bg-deh-border rounded p-2 m-2 lg:inline-flex lg:w-[45%] text-white"
    >
      <span class="">test</span>
    </section>

    <section id=""></section>
  </div>
</template>

<script setup lang="ts">
/**
 * Every raw string needs to be a localizationKey except for url
 */
interface FeatureData {
  title: string;
  image: {
    url: string;
    height: number;
    widht: number;
  };
  description: string;
  beta?: boolean;
}

const Feautures: FeatureData[] = [
  {
    description: "feature.automod.desc",
    title: "feature.automod.name",
    image: {
      height: 24,
      url: "/automod.png", //TODO  http://vitejs.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility
      widht: 24,
    },
    beta: true,
  },
  {
    description: "feature.home.desc",
    title: "feature.home.name",
    image: {
      height: 24,
      url: "/home.png",
      widht: 24,
    },
  },
  {
    description: "feature.msgReminder.desc",
    title: "feature.msgReminder.name",
    image: {
      height: 24,
      url: "/clock.png",
      widht: 24,
    },
    beta: false,
  },
];
</script>
