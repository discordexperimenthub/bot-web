<template>
  <div class="relative px-2 py-3">
    <div class="container px-4 mx-auto items-center justify-between">
      <div v-if="isMobileProp === true">
        <!-- Mobile Navbar -->
        <div class="mx-2">
          <div>
            <button
              class="text-white text-2xl absolute -right-[0px] m-4 mr-[30px] bg-black rounded box-shadow-custom-black"
              @click="openCustomMenu()">
              ↗️
            </button>

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
                <div>
                  <a href="https://discord.gg/experiments" class="align-middle my-2 hover-underline-animation-small">
                    <span class="text-3xl "> <i class="fa-brands fa-discord pr-2" />Support</span>
                  </a>
                  <br>
                  <!-- Close the menu otherwise the scolling would be deactivated -->
                  <a href="#id_features" @click="closeCustomMenuAnimation"
                    class="align-middle my-2 hover-underline-animation-small">
                    <span class="text-3xl "> <i class="fa-solid fa-wand-magic-sparkles pr-2" /> Features</span>
                  </a>
                  <br>
                  <span class="align-middle my-2 underline underline-offset-4">
                    <span class="text-3xl "> <i class="fa fa-link pr-2" />Links:</span>
                  </span>
                  <br>
                  <a href="https://discord.com/api/oauth2/authorize?client_id=1078340529932222505&permissions=536882192&scope=applications.commands%20bot"
                    class="align-middle my-2 hover-underline-animation-small">
                    <span class="text-xl"> <i class="fa fa-plus" />
                      Invite
                    </span>
                  </a>
                  <br>
                  <a href="https://discord.gg/experiments" class="align-middle my-2 hover-underline-animation-small">
                    <span class="text-xl"> <i class="fab fa-discord" /> Discord </span>
                  </a>
                  <br>
                  <a href="https://discord.gg/experiments" class="align-middle my-2 hover-underline-animation-small">
                    <span class="text-xl"> <i class="fa-brands fa-github" /> GitHub</span>
                  </a>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Desktop -->
      <div v-else class="px-4 w-full">
        <div class="m-1">
          <span class="text-deh-main p-2 mt-4 inline-flex">
            <div class="box-shadow-custom-black text-6xl font-bold text-deh-main rounded p-2 pb-4 m-1">
              {{ $t("navfoo.title") }}
            </div>
          </span>
          <span class="ml-[15%] text-deh-main bg-neutral-700 rounded box-shadow-custom-black text-3xl font-bold p-2 mt-4">
            <a href="https://discord.gg/experiments" class="hover-underline-animation-small p-2 m-1 mx-4">
              <i class="fa-brands fa-discord" /> Support
            </a>

            <a href="#id_features" class="hover-underline-animation-small p-2 m-1 mx-4">
              <i class="fa-solid fa-wand-magic-sparkles" /> Features
            </a>

            <div class="dropdown  p-2 m-1 mx-4 cursor-pointer">
              <span class="hover-underline-animation-small"><i class="fa fa-link" /> Links</span>
              <div
                class="dropdown-content custom-fade-in text-lg mt-2 left-3 w-36 align-middle text-center bg-deh-server-slider rounded">
                <a href="https://discord.com/api/oauth2/authorize?client_id=1078340529932222505&permissions=536882192&scope=applications.commands%20bot"
                  target="_blank" class="m-1 p-1 hover-underline-animation-small hover:bg-deh-footer rounded"><i
                    class="fa fa-plus" />
                  Invite</a>
                <a href="https://discord.gg/experiments" target="_blank"
                  class="m-1 p-1 hover-underline-animation-small hover:bg-deh-footer rounded"><i class="fab fa-discord" />
                  Discord</a>
                <a href="https://github.com/discordexperimenthub" target="_blank"
                  class="m-1 p-1 hover-underline-animation-small hover:bg-deh-footer rounded"><i
                    class="fa-brands fa-github" /> GitHub</a>
              </div>
            </div>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, onBeforeMount } from 'vue';

const isMobileProp = ref(false);
const showCustomMenu = ref(false);

//Checks if the desktop navbar items are in the same line or could be cutted of 
function couldBeNotInSameLine() {
  return window.innerWidth < 1550;
}

function openCustomMenu() {
  showCustomMenu.value = !showCustomMenu.value;
  const body = document.querySelector("body");
  body!.style.overflow = "hidden";
};
function closeCustomMenuAnimation() {
  const element = document.getElementById("custom-menu") as HTMLElement;
  element.classList.remove("custom-fade-in");
  element.classList.add("custom-fade-out");

  setTimeout(() => {
    element.classList.remove("custom-fade-out");
    element.classList.add("custom-fade-in");
    openCustomMenu();
    const body = document.querySelector("body");
    body!.style.overflow = "auto";
  }, 200);
};
function isMobile() {
  window.innerWidth < 1080 ? isMobileProp.value = true : isMobileProp.value = false;
};

onBeforeMount(() => {
  isMobile();
})

onBeforeUnmount(() => {
  window.removeEventListener("resize", () => {
    isMobile();
  });
})

onMounted(() => {
  window.addEventListener("resize", () => {
    isMobile();
    if(couldBeNotInSameLine()) isMobileProp.value = true;
  });
})

</script>
