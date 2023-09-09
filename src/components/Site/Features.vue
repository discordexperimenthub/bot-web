<template>
  <div class="m-8">
    <div class="flex justify-center align-middle rounded-lg">
      <section class="lg:w-[50%] w-[95%] rounded-lg">
        <Carousel :autoplay="3500" class="rounded-lg">
          <Slide
            v-for="(feature, index) in Feautures"
            :key="index"
            class="rounded-lg"
          >
            <div
              class="carousel__item p-8 w-full rounded-lg bg-opacity-40 bg-deh-server-slider backdrop-blur-lg"
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
              <div>
                <!-- Content -->
                <span class="text-deh-white text-xl">
                  <!-- Description -->
                  {{ $t(feature.description) }}
                </span>

                <!-- Image -->
                <a
                    :href="feature.thumbnail.url"
                    target="_blank"
                    class="justify-center align-middle flex mt-2 "
                  >
                    <img
                      :src="feature.thumbnail.url"
                      class="rounded-xl "
                    />
                  </a>
              </div>
            </div>
          </Slide>

          <template #addons>
            <Navigation class="rounded-lg" />
          </template>
        </Carousel>
      </section>
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
import { Carousel, Slide, Navigation } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

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
      url: "/automodAi_example.png",
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
      url: "/home_example.png",
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
      url: "/reminde_example.png",
    },
    beta: false,
  },
];
</script>
