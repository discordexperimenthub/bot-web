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
        author-image="/automod.png"
        author-name="AutoMod"
        color="rgba(84, 97, 242, 1)"
      >
        <discord-embed-description slot="description">
          <img src="/automod.png" height="22" width="22" class="inline-flex" />
          <span class="font-bold ml-1 align-middle">{{ "Automod AI (Experimental)" }}</span
          ><br />
          <img src="/enabled.svg" height="16" width="16" class="inline-flex" />
          <span class="align-middle"> Enabled</span><br />
          <br />
          <span class="font-bold align-middle">• Alert Channel: </span>
          <span class="align-middle">None</span> <br />
          <span class="font-bold align-middle">• Rules:</span>
          <span class="align-middle"> 0 found</span><br />
          <span class="font-bold align-middle">• AI Model:</span>
          <span class="align-middle">
            <code>gpt-3.5-turbo-16k</code> by OpenAI </span
          ><br />
          <span class="font-bold align-middle">• Allow Fallbacks: </span>
          <img
            src="/enabled.svg"
            height="16"
            width="16"
            class="inline-flex"
          /><span class="align-middle"> Enabled</span> <br />
          <span class="font-bold align-middle"
            >• Enabled Blacklisted Roles:</span
          ><br />
          <span class="font-bold align-middle">• Blacklisted Channels:</span
          ><br />
          <br />
          <!-- bad content -->
          <img src="/badcontent.svg" height="22" width="22" class="inline-flex" />
          <span class="font-bold ml-1 align-middle">{{ "Bad Content Filter" }}</span
          > <span class="text-deh-white bg-deh-main rounded p-[1px] font-bold">BETA</span><br />
          <img src="/enabled.svg" height="16" width="16" class="inline-flex" />
          <span class="align-middle"> Enabled</span><br />
          <br />

          <span class="font-bold align-middle">• Alert Channel: <span class="font-normal">None</span></span><br>
          <span class="font-bold align-middle">• Filters: <span class="font-normal">All</span></span><br>
          <span class="font-bold align-middle">• AI Model: <span  class="font-normal"><code>text-moderation-stable</code> by OpenAI</span></span><br>
          <span class="font-bold align-middle">• Blacklisted Roles:</span><br>
          <span class="font-bold align-middle">• Blacklisted Channels:</span><br>
          <br>
          <img src="/badcontent.svg" height="22" width="22" class="inline-flex" />
          <span class="font-bold ml-1 align-middle">{{ "Toxic Content Filter" }}</span
          > <span class="text-deh-white bg-deh-main rounded p-[1px] font-bold">BETA</span><br />
          <img src="/enabled.svg" height="16" width="16" class="inline-flex" />
          <span class="align-middle"> Enabled</span><br />
          <br>
          <span class="font-bold align-middle">• Alert Channel: <span class="font-normal">None</span></span><br>
          <span class="font-bold align-middle">• Filters: <span class="font-normal">All</span></span><br>
          <span class="font-bold align-middle">• AI Model: <span  class="font-normal"><code>perspective-v1</code> by Google</span></span><br>
          <span class="font-bold align-middle">• Blacklisted Roles:</span><br>
          <span class="font-bold align-middle">• Blacklisted Channels:</span><br>
          
        
        </discord-embed-description>

        <discord-embed-footer slot="footer" footer-image="/logo.png">
          Made with ❤️ by discord.gg/experiments
        </discord-embed-footer>
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
