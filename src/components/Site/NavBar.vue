<template>
  <div class="relative px-2 py-3">
    <div class="container px-4 mx-auto items-center justify-between">
      <div v-if="isMobile() === true">
        <!-- Mobile Navbar -->
        <div class="mx-2">
          <div>
            <button
              class="text-white text-2xl absolute -right-[0px] m-4 mr-[30px] bg-black rounded box-shadow-custom-black"
              @click="openCustomMenu()">
              ↗️
            </button>

            <!-- 
              TODO: Mobile NavBar Icons
              TODO: Desktop NavBar Link List Animation
              TODO: Desktop NavBar Elements more to the right 
              TODO: Mobile Bot Icon smaller
              TODO: Desktop Feature margin remove
              TODO: Desktop Recreate the Title Text
              TODO: Desktop Recreate Landing Screen
             -->

            <div
              class="rounded text-deh-main text-4xl max-w-fit font-bold p-2 bg-neutral-700 box-shadow-custom-black mt-4">
              {{ $t("navfoo.title") }}
            </div>

            <div v-if="showCustomMenu" id="custom-menu"
              class="absolute text-deh-main h-screen bg-deh-footer bg-opacity-75 p-1 text-center -left-[0px] -top-[0px] w-full z-10 custom-fade-in">
              <div class="bg-deh-footer ml-8 mt-8 mr-2 rounded min-h-[150px] p-5 pt-6 box-shadow-custom-black">
                <div class="inline-flex w-full">
                  <div class="text-left text-4xl font-bold bg-neutral-700 min-w-fit p-1 rounded">
                    {{ $t("navfoo.title") }}
                  </div>
                  <button class="text-2xl text-right ml-auto" @click="closeCustomMenuAnimation()">
                    ❌
                  </button>
                </div>
                <div class="p-2"></div>
                <div v-for="link of links">
                  <div class="text-2xl align-middle my-2">
                    <i :class="link.icon" class="mr-1" />
                    <!-- <span v-else><font-awesome-icon :icon="[...link.icons]" /></span> -->
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

      <div v-else class="relative flex justify-between lg:w-auto px-4 lg:static lg:block lg:justify-start w-[100%]">
        <div class="m-1 flex">
          <div class="rounded text-deh-main min-w-fit text-4xl font-bold p-2 bg-neutral-700 box-shadow-custom-black mt-4">
            {{ $t("navfoo.title") }}
            <span
              class="text-deh-white bg-deh-main rounded p-[2px] text-xs align-top font-bold lg:drop-shadow-[0_2px_20px_rgba(84,97,242,0.5)]">BOT</span>
          </div>
          <div class="w-full flex ml-[15%] text-deh-main text-4xl font-bold p-2 mt-4">
            <a href="#id_servers"
              class="box-shadow-custom-black hover-underline-animation bg-neutral-700 rounded p-2 m-1 mx-4">
              Server
            </a>

            <a href="#id_features"
              class="box-shadow-custom-black hover-underline-animation bg-neutral-700 rounded p-2 m-1 mx-4">
              Features
            </a>

            <div class="dropdown box-shadow-custom-black bg-neutral-700 rounded p-2 m-1 mx-4 cursor-pointer">
              <span>Links</span>
              <div
                class="dropdown-content custom-fade-in text-lg mt-2 -left-5 w-36 align-middle text-center bg-deh-server-slider rounded">
                <a href="" target="_blank" class="m-1 p-1 hover-underline-animation hover:bg-deh-footer rounded"><i
                    class="fa fa-plus" />
                  Invite</a>
                <a href="" target="_blank" class="m-1 p-1 hover-underline-animation hover:bg-deh-footer rounded"><i
                    class="fab fa-discord" /> Discord</a>
                <a href="" target="_blank" class="m-1 p-1 hover-underline-animation hover:bg-deh-footer rounded"><i
                    class="fa-brands fa-github" /> GitHub</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const links = [
  {
    //string of classes for <i> element
    icon: 'fa fa-plus',
    localCode: "navfoo.invite",
    url: "",
  },
  {
    icon: 'fab fa-discord',
    localCode: "navfoo.support",
    url: "",
  },
  {
    icon: 'fa-brands fa-github',
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
      showLinkList: false,
    };
  },
  methods: {
    toggleLinkList() {
      this.showLinkList = !this.showLinkList;
    },
    openCustomMenu() {
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
    //TODO add an event listiener for a resize event of the window
    isMobile() {
      return window.innerWidth < 1080;
    },
    toggleNavbar() {
      this.showMenu = !this.showMenu;
    },
  },
};
</script>
