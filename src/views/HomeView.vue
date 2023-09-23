<template>
  <div class="bg-deh-black">
    <NavBar />
    <main class="min-h-screen pt-28">
      <section class="w-full mb-28 flex flex-col items-center">
        <!-- Landing -->

        <img src="/logo.png" class="lg:w-[15%] m-2 p-2" />

        <div class="p-2 m-1 text-center font-bold text-white">
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

      <Servers id="id_servers" />

      <section class="mt-4" id="id_features">
        <div class="font-bold text-deh-white text-center text-5xl underline">
          {{ $t("feature.title") }}
        </div>
        <Features />
      </section>

      <img src="../assets/img/footer.top.svg" class="fill-deh-server-slider" />
      <Footer />
    </main>
  </div>
</template>

<script setup lang="ts">
import NavBar from "../components/Site/NavBar.vue";
import Footer from "../components/Site/Footer.vue";
import Features from "../components/Site/Features.vue";
import Servers from "../components/Site/Servers.vue";
</script>
