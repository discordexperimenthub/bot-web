<template>
  <div class="relative flex flex-wrap items-center justify-between px-2 py-3">
    <div
      class="container px-4 mx-auto flex flex-wrap items-center justify-between"
    >
      <div v-if="isMobile() === true">
        <!-- Mobile Navbar -->
        <div class="text-deh-main"></div>

        <div class="mx-2">
          <div>
            <button
              class="text-white text-2xl absolute -right-[0px] m-4 mr-[30px] bg-black rounded box-shadow-custom-black"
              @click="openCustomMenu()"
            >
              ↗️
            </button>

            <div
              class="rounded text-deh-main text-4xl font-bold p-2 bg-neutral-700 box-shadow-custom-black mt-4"
            >
              {{ $t("navfoo.title") }}
            </div>

            <div
              v-if="showCustomMenu"
              id="custom-menu"
              class="absolute text-deh-main h-screen bg-deh-footer bg-opacity-75 p-1 text-center -left-[0px] -top-[0px] w-full z-10 custom-fade-in"
            >
              <div
                class="bg-deh-footer ml-8 mt-8 mr-2 rounded min-h-[150px] rounded-l-3xl p-5 pt-6 box-shadow-custom-black"
              >
                <div class="inline-flex w-full">
                  <div
                    class="text-left text-4xl font-bold bg-neutral-700 min-w-fit p-1 rounded"
                  >
                    {{ $t("navfoo.title") }}
                  </div>
                  <button
                    class="text-2xl text-right ml-auto"
                    @click="closeCustomMenuAnimation()"
                  >
                    ❌
                  </button>
                </div>
                <div class="p-2"></div>
                <div v-for="link of links">
                  <div class="text-2xl align-middle my-2">
                    <img
                      :src="link.iconSrc"
                      class="inline-flex pb-2 mr-2"
                      width="32"
                    />
                    <a :href="link.url" class="hover-underline-animation">{{
                      $t(link.localCode)
                    }}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        v-else
        class="w-full relative flex justify-between lg:w-auto px-4 lg:static lg:block lg:justify-start"
      >
        <div class="w-full m-1 flex justify-start">
          <div
            class="rounded text-deh-main text-4xl font-bold p-2 bg-neutral-700 box-shadow-custom-black mt-4"
          >
            {{ $t("navfoo.title") }}
            <span
              class="text-deh-white bg-deh-main rounded p-[2px] text-xs align-top font-bold lg:drop-shadow-[0_2px_20px_rgba(84,97,242,0.5)]"
              >BOT</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const links = [
  {
    iconSrc: "/automod.png",
    localCode: "navfoo.invite",
    url: "",
  },
  {
    iconSrc: "/automod.png",
    localCode: "navfoo.support",
    url: "",
  },
  {
    iconSrc: "/automod.png",
    localCode: "navfoo.github",
    url: "",
  },
];
</script>

<script lang="ts">
export default {
  data() {
    return {
      showMenu: false,
      showCustomMenu: false,
    };
  },
  methods: {
    openCustomMenu: function () {
      this.showCustomMenu = !this.showCustomMenu;
      const body = document.querySelector("body");
      body!.style.overflow = "hidden";
    },
    closeCustomMenuAnimation() {
      const element = document.getElementById("custom-menu") as HTMLElement;
      element.classList.remove("custom-fade-in");
      element.classList.add("custom-fade-out");

      setTimeout(() => {
        element.classList.remove("custom-fade-out");
        element.classList.add("custom-fade-in");
        this.openCustomMenu();
        const body = document.querySelector("body");
        body!.style.overflow = "auto";
      }, 200);
    },
    isMobile: function () {
      return window.innerWidth < 1080;
    },
    toggleNavbar: function () {
      this.showMenu = !this.showMenu;
    },
  },
};
</script>
