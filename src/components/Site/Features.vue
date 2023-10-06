<template>
  <div class="m-8">
    <div class="invisible lg:visible " v-if="!isMobileProp">
      <div
        class="flex-row w-full h-56 my-40 bg-gradient-to-br px-30 from-neutral-900/90 flex items-center justify-start to-neutral-900/50 rounded-lg p-1 shadow-md">
        <div class="mx-4 p-8 absolute left-[5%] py-16 flex-col text-center flex-none z-50">
          <p class="text-3xl text-white font-semibold"><img src="/automod.png"
              class="inline-flex w-[32px] h-[32px] mt-[0px] mr-1" />
            <span class="underline underline-offset-2 text-white">{{ $t('feature.automod.title') }}</span>
          </p>
          <p class="text-lg text-white font-medium line-clamp-5">{{ $t('feature.automod.desc') }}
          </p>
        </div>
        <img src="/automodAi_banner.png" id="feature_img_1" width="556"
          class="absolute right-[10%] hover:scale-110 transition-all rounded-xl perspective-right shadow-xl shadow-black" />
      </div>
      <div
        class="flex-row w-full h-56 my-40 bg-gradient-to-br px-30 from-neutral-900/90 flex items-center justify-start to-neutral-900/50 rounded-lg p-1 shadow-md">
        <div class="mx-4 p-8 absolute right-[5%] py-16 flex-col text-center flex-none z-50">
          <p class="text-3xl text-white font-semibold"><img src="/home.svg"
              class="inline-flex w-[32px] h-[32px] mt-[0px] mr-1" />
            <span class="underline underline-offset-2 text-white">{{ $t('feature.home.title') }}</span></p>
          <p class="text-lg text-white font-medium line-clamp-5">{{ $t('feature.home.desc') }}
          </p>
        </div>
        <img src="/home_banner.png" id="feature_img_1" width="556"
          class="absolute left-[10%] hover:scale-110 transition-all rounded-xl perspective-right shadow-xl shadow-black" />
      </div>
    </div>

    <div class="invisible lg:visible flex justify-center align-middle" v-if="!isMobileProp">
      <div class="lg:w-[75%] w-[95%]">
        <Carousel :autoplay="3500" :wrap-around="true" :items-to-show="1">
          <Slide v-for="(feature, index) in Feautures" :key="index">
            <div
              class="carousel__item p-8 w-full h-full rounded-lg bg-opacity-40 bg-deh-server-slider backdrop-blur-lg m-2">
              <div class="font-bold text-3xl p-4">
                <!-- Title -->
                <img :src="feature.image.url" class="inline-flex w-[32px] h-[32px] mt-[0px] mr-1" />
                <span class="underline underline-offset-2 text-white">{{
                  $t(feature.title)
                }}</span>
                <span v-if="feature.beta"
                  class="text-deh-white bg-deh-main p-[2px] pr-[6px] mx-1 text-start text-base rounded">
                  BETA
                </span>
              </div>

              <span class="text-deh-white text-xl text-center">
                <!-- Description -->
                {{ $t(feature.description) }}
              </span>

              <div class="text-left mt-2 flex justify-center align-middle">
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

    <!-- 
     ! Mobile
     -->
    <div v-else>
      <template v-for="(feature, _) in Feautures">
        <div class="font-bold text-3xl p-4 text-center align-middle">
          <!-- Title -->
          <img :src="feature.image.url" class="inline-flex w-[32px] h-[32px] mt-[0px] mr-1" />
          <span class="underline underline-offset-2 text-white">{{
            $t(feature.title)
          }}</span>
          <span v-if="feature.beta"
            class="text-deh-white bg-deh-main p-[2px] pr-[6px] mx-1 text-start text-base rounded align-top">
            BETA
          </span>

          <br />
          <span class="text-deh-white text-xl font-normal">
            <!-- Description -->
            {{ $t(feature.description) }}
          </span>
        </div>

        <template v-if="isMobileProp">
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
        </template>
        <template v-else>
          <div class="flex justify-center align-middle">
            <a :href="feature.thumbnail.url" target="_blank" class="flex mt-2 justify-center align-middle">
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
  background-image: url("../../assets/svg/featurelist.svg");
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
import { onMounted, onBeforeUnmount, ref } from "vue";
import { Carousel, Slide, Navigation, Pagination } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

import { mouseImageHoverEffect } from "../../func/mouse-effect";

import Automod from "../discordComponents/automod.vue";
import Home from "../discordComponents/home.vue";
import Reminder from "../discordComponents/reminder.vue";

type FeauterComponent = "AutoMod" | "Home" | "MsgReminder";

mouseImageHoverEffect('feature_img_1');

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
const isMobileProp = ref(false);

function isMobile() {
  window.innerWidth < 1080 ? isMobileProp.value = true : isMobileProp.value = false;
};

onBeforeUnmount(() => {
  window.removeEventListener("resize", () => {
    isMobile();
  });
})

onMounted(() => {
  window.addEventListener("resize", () => {
    isMobile();
  });
})
</script>


