<template>
  <discord-messages>
    <discord-message profile="dehBot">
      <discord-command
        slot="reply"
        profile="voron"
        command="/settings"
      ></discord-command>
      <discord-embed
        slot="embeds"
        author-image="/sapphire.png"
        author-name="Sapphire Developers"
        author-url="https://sapphirejs.dev"
        color="#0F52BA"
        embed-title="Sapphire"
        image="/sapphire.png"
        thumbnail="/sapphire.png"
        url="https://sapphirejs.dev"
      >
      </discord-embed>
    </discord-message>
  </discord-messages>
</template>

<script setup lang="ts">
// https://codesandbox.io/s/discord-components-vue-g1w48?file=/src/App.vue:12970-13446

// const profiles = {
//   voroniyx: {
//     author: "Voroniyx",
//     bot: false,
//     avatar: "",
//   },
//   dehBot: {
//     author: "Experiment Hub",
//     bot: true,
//     roleColor: "",
//     roleIcon: "",
//     roleName: "",
//   },
// };
</script>
