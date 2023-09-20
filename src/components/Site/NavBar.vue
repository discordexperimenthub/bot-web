<template>
  <div class="relative flex flex-wrap items-center justify-between px-2 py-3">
    <div
      class="container px-4 mx-auto flex flex-wrap items-center justify-between"
    >
      <div v-if="isMobile() === true">
        <!-- Mobile Navbar -->
        <div class="text-deh-main"></div>

        <div class="mx-2">
          <!-- Dropdown -->

          <div>
            <button class="text-white" @click="openCustomMenu()">
              Press me
            </button>
            <div
              v-if="showCustomMenu"
              id="custom-menu"
              class="absolute text-deh-main h-[100%] backdrop-blur-sm p-1 text-right -left-[0px] -top-[0px] w-[100%] z-10 custom-fade-in"
            >
              <button
                class="absolute -right-[0px] m-4 mr-6"
                @click="closeCustomMenuAnimation()"
              >
                ❌
              </button>
              <div
                class="bg-deh-footer ml-8 mr-2 rounded min-h-[150px] p-5 pt-10 box-shadow-custom-black"
              >
                test
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="w-full relative flex justify-between lg:w-auto px-4 lg:static lg:block lg:justify-start"
      >
        <div class="w-full m-1 flex justify-start">
          <div
            class="rounded text-deh-main text-4xl font-bold p-2 bg-neutral-700 box-shadow-custom-black"
          >
            {{ $t("navfoo.title") }}
            <span
              class="text-deh-white bg-deh-main rounded p-[2px] text-xs align-top font-bold lg:drop-shadow-[0_2px_20px_rgba(84,97,242,0.5)]"
              >BOT</span
            >
          </div>
        </div>
        <button
          class="cursor-pointer text-xl leading-none px-3 py-1 rounded bg-transparent block lg:hidden outline-none focus:outline-none"
          type="button"
          v-on:click="toggleNavbar()"
        >
          🟰
        </button>
      </div>

      <div v-if="showMenu"></div>

      <div
        v-bind:class="{ hidden: !showMenu, flex: showMenu }"
        class="lg:flex lg:flex-grow items-center text-deh-main rounded lg:bg-transparent w-full lg:w-auto"
      >
        <div
          class="flex flex-col lg:flex-row list-none lg:ml-auto navbar-ul-item"
        >
          <a
            class="navbar-li-item bg-neutral-700 box-shadow-custom-black mx-2 rounded"
            href=""
          >
            <a class="p-[10px] flex items-center text-xs uppercase font-bold">
              <span
                class="mx-2 lg:drop-shadow-[0_2px_20px_rgba(84,97,242,0.50)] text-xl"
                >{{ $t("navfoo.invite") }}</span
              >
            </a>
          </a>
          <a
            class="navbar-li-item bg-neutral-700 box-shadow-custom-black mx-2 rounded"
            href=""
          >
            <a class="p-[10px] flex items-center text-xs uppercase font-bold">
              <span
                class="mx-2 lg:drop-shadow-[0_2px_20px_rgba(84,97,242,0.50)] text-xl"
                >{{ $t("navfoo.support") }}</span
              >
            </a>
          </a>
          <!-- <li class="navbar-li-item">
                        <a class="px-3 py-2 flex items-center text-xs uppercase font-bold hover:opacity-75">
                            <span class="ml-2 lg:drop-shadow-[0_2px_20px_rgba(84,97,242,1)] text-xl">{{ $t('navfoo.docs') }}</span>
                        </a>
                    </li> -->
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
    },
    closeCustomMenuAnimation() {
      const element = document.getElementById("custom-menu") as HTMLElement;
      element.classList.remove("custom-fade-in");
      element.classList.add("custom-fade-out");
      setTimeout(() => {
        element.classList.remove("custom-fade-out");
        element.classList.add("custom-fade-in");
        this.openCustomMenu();
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
