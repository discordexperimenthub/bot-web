<template>
  <div class="m-8">
    <div
      class="invisible lg:visible flex justify-center align-middle"
      v-if="!isBigMobile"
    >
      <div class="lg:w-[50%] w-[95%]"><!-- 3500  -->
        <Carousel :autoplay="800000" :wrap-around="true" :items-to-show="1">
          <Slide v-for="(feature, index) in Feautures" :key="index">
            <div
              class="carousel__item p-8 w-full h-full rounded-lg bg-opacity-40 bg-deh-server-slider backdrop-blur-lg m-2"
            >
              <div class="font-bold text-3xl p-4">
                <!-- Title -->
                <img
                  :src="feature.image.url"
                  class="inline-flex w-[32px] h-[32px] mt-[0px] mr-1"
                />
                <span class="underline underline-offset-2 text-white">{{
                  $t(feature.title)
                }}</span>
                <span
                  v-if="feature.beta"
                  class="text-deh-white bg-deh-main p-[2px] pr-[6px] mx-1 text-start text-base rounded"
                >
                  BETA
                </span>
              </div>

              <span class="text-deh-white text-xl text-center">
                <!-- Description -->
                {{ $t(feature.description) }}
              </span>

              <div class="text-left mt-2">
                <div v-if="feature.component === 'AutoMod'">
                  <Automod />
                </div>
                <div v-else-if="feature.component === 'Home'">
                  <Home />
                </div>
                <div v-else-if="feature.component === 'MsgReminder'">
                  <Reminder />
                </div>
              </div>
            </div>
          </Slide>

          <template #addons>
            <Navigation class="rounded-lg" />
            <Pagination />
          </template>
        </Carousel>
      </div>
    </div>

    <div v-else>
      <template v-for="(feature, _) in Feautures">
        <div class="font-bold text-3xl p-4 text-center align-middle">
          <!-- Title -->
          <img
            :src="feature.image.url"
            class="inline-flex w-[32px] h-[32px] mt-[0px] mr-1"
          />
          <span class="underline underline-offset-2 text-white">{{
            $t(feature.title)
          }}</span>
          <span
            v-if="feature.beta"
            class="text-deh-white bg-deh-main p-[2px] pr-[6px] mx-1 text-start text-base rounded align-top"
          >
            BETA
          </span>

          <br />
          <span class="text-deh-white text-xl font-normal">
            <!-- Description -->
            {{ $t(feature.description) }}
          </span>
        </div>

        <template v-if="isSmallMobileScreen() === false">
          <div class="text-left mt-2">
            <div v-if="feature.component === 'AutoMod'">
              <Automod />
            </div>
            <div v-else-if="feature.component === 'Home'"><Home /></div>
            <div v-else-if="feature.component === 'MsgReminder'">
              <Reminder />
            </div>
          </div>
        </template>
        <template v-else>
          <div class="flex justify-center align-middle">
            <a
              :href="feature.thumbnail.url"
              target="_blank"
              class="flex mt-2 justify-center align-middle"
            >
              <img :src="feature.thumbnail.url" class="rounded-xl" />
            </a>
          </div>
        </template>
      </template>
    </div>
  </div>
</template>

<style>
:deep(.bg-feautes) {
  background-image: url("../../assets/img/featurelist.svg");
  background-size: cover;
}

.carousel__prev,
.carousel__next {
  color: #fff;
}

.carousel__prev:hover,
.carousel__next:hover {
  color: #f0f0f0;
}
</style>

<script setup lang="ts">
import { onBeforeMount, onMounted, onUpdated, ref } from "vue";
import { Carousel, Slide, Navigation, Pagination } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

import Automod from "../discordComponents/automod.vue";
import Home from "../discordComponents/home.vue";
import Reminder from "../discordComponents/reminder.vue";

type FeauterComponent = "AutoMod" | "Home" | "MsgReminder";

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
  component: FeauterComponent;
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
      url: "/automodAi_example.png",
    },
    beta: true,
    component: "AutoMod",
  },
  {
    description: "feature.home.desc",
    title: "feature.home.title",
    image: {
      height: 24,
      url: "/home.svg",
      widht: 24,
    },
    thumbnail: {
      url: "/home_example.png",
    },
    component: "Home",
  },
  {
    description: "feature.msgReminder.desc",
    title: "feature.msgReminder.title",
    image: {
      height: 24,
      url: "/reminder.svg",
      widht: 24,
    },
    thumbnail: {
      url: "/reminde_example.png",
    },
    beta: false,
    component: "MsgReminder",
  },
];

function isSmallMobileScreen() {
  return window.innerWidth < 900;
}

const isBigMobile = ref(true);

onBeforeMount(() => {
  isBigMobile.value = window.innerWidth < 1080;
});

onUpdated(() => {
  isBigMobile.value = window.innerWidth < 1080;
});

onMounted(() => {
  isBigMobile.value = window.innerWidth < 1080;
});
</script>


