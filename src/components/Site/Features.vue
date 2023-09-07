<template>
  <div class="m-8">
    <section
      id="content-toggle"
      class="flex flex-wrap align-middle justify-center lg:inline-flex rounded p-2 m-2 lg:w-[45%]"
    >
      <div class="text-deh-main bg-feautes rounded">
        <div class="font-bold text-3xl p-4">
          <template v-for="(feature, index) in Feautures">
            <button
              class="flex flex-wrap align-middle justify-center"
              @click="switchFeauture(index)"
            >
              <img
                :src="feature.image.url"
                class="inline-flex w-[24px] h-[24px] mt-[8px] mr-1"
              />
              <span
                class="underline underline-offset-2 text-white drop-shadow-md shadow-emerald-400"
                >{{ $t(feature.title) }}</span
              >
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
      <div class="p-2">
        <div
          class="text-xl font-bold text-deh-white"
        >
          <span class="underline underline-offset-2">{{ $t(Feautures[active].title) }}</span> <span v-if="Feautures[active].beta" class="text-deh-white bg-deh-main p-[2px] text-base rounded">BETA</span>
        </div>
        {{ Feautures[active] }}
      </div>
    </section>

    <section id=""></section>
  </div>
</template>

<style scoped>
:deep(.bg-feautes) {
  background-image: url("../../assets/img/featurelist.svg");
  background-size: cover;
}
</style>

<script setup lang="ts">
import { ref } from "vue";

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
  thumbnail: {
    url: string;
    height?: number;
    widht?: number;
  };
  description: string;
  beta?: boolean;
}

const Feautures: FeatureData[] = [
  {
    description: "feature.automod.desc",
    title: "feature.automod.title",
    image: {
      height: 24,
      url: "/automod.png", //TODO  http://vitejs.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility
      widht: 24,
    },
    thumbnail: {
      url:"",
    },
    beta: true,
  },
  {
    description: "feature.home.desc",
    title: "feature.home.title",
    image: {
      height: 24,
      url: "/home.png",
      widht: 24,
    },
    thumbnail: {
      url:"",
    },
  },
  {
    description: "feature.msgReminder.desc",
    title: "feature.msgReminder.title",
    image: {
      height: 24,
      url: "/clock.png",
      widht: 24,
    },
    thumbnail: {
      url:"",
    },
    beta: false,
  },
];

const active = ref(0);

function switchFeauture(index: number) {
  active.value = index;
}
</script>
