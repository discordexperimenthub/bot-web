<template>
  <div class="bg-deh-footer w-full pb-4 p-4">
    <div
      class="rounded text-deh-main font-bold p-2 bg-neutral-700 box-shadow-custom-grey text-center flex"
    >
      <section class="min-w-[48%] flex flex-wrap align-middle justify-center text-2xl">
        <!--  -->
        {{ $t("navfoo.title") }}
      </section>

      <section class="min-w-[48%] flex flex-wrap align-middle justify-center">
        <!-- Details -->
        <ul class="flex flex-col items-center m-1">
          <li>
            <a href="https://discord.gg/experiments">{{
              $t("navfoo.support")
            }}</a>
          </li>
          <li>
            <a
              href="https://discord.com/api/oauth2/authorize?client_id=1078340529932222505&permissions=536882192&scope=bot%20applications.commands"
              >{{ $t("navfoo.invite") }}</a
            >
          </li>
        </ul>
        <languageSwitch />
      </section>
    </div>
    <div class="w-full">
      <div class="text-deh-border text-xs text-center">
        Website: © 2023 Voroniyx <br />
        This website is not affiliated with Discord. All product names, logos,
        and brands are property of their respective owners.
      </div>
    </div>

    <div class="text-center text-deh-main">
      <div class="font-bold">
        <!-- Link List -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import languageSwitch from "../languageSwitch.vue";
</script>
