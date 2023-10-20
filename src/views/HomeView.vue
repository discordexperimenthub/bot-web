<template>
  <div class="bg-deh-black">
    <NavBar />
    <main class="min-h-screen pt-28">
      <section class="w-full mb-28 flex flex-col items-center">
        <!-- Landing -->

        <img src="/logo_helloween.png" class="w-[75%] lg:w-[25%] m-2 p-2" />

        <div class="p-2 m-1 text-center font-bold text-white ">
          {{ $t("home.description") }}
          <br />
          <a href="https://discord.gg/experiments" class="text-deh-main"
            >https://discord.gg/experiments</a
          >
        </div>

        <div class="my-4">
          <!-- Buttons -->
          <a
            href="https://discord.com/api/oauth2/authorize?client_id=1078340529932222505&permissions=536882192&scope=applications.commands%20bot"
            class="bg-deh-main p-1 rounded text-deh-white font-bold text-3xl mx-2"
          >
            <button>
              {{ $t("navfoo.invite") }}
            </button>
          </a>
        </div>
      </section>

      <servers id="id_servers" />

      <section class="mt-4" id="id_features">
        <div class="font-bold text-deh-white text-center text-5xl underline">
          {{ $t("feature.title") }}
        </div>
        <Features />
      </section>

      <img src="../assets/svg/footer.top.svg" class="fill-deh-server-slider translate-y-2" />
      <footerNew />
    </main>
  </div>
</template>

<script setup lang="ts">
import NavBar from '../components/site/NavBarComponent.vue';
import Features from '../components/site/FeatureComponent.vue';
import servers from '../components/site/ServersComponent.vue';
import footerNew from '../components/site/FooterComponent.vue';
</script>
