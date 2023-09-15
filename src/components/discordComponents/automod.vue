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
          <span class="font-bold ml-1 align-middle">{{ $t('feature.automod.component.title') }}</span
          ><br />
          <img src="/enabled.svg" height="16" width="16" class="inline-flex" />
          <span class="align-middle"> {{ $t('global.enabled') }}</span><br />
          <br />
          <span class="font-bold align-middle">• {{ $t('feature.automod.component.alertChannel') }}: </span>
          <span class="align-middle">{{ $t('global.none') }}</span> <br />
          <span class="font-bold align-middle">• {{ $t('feature.automod.component.rules') }}:</span>
          <span class="align-middle"> {{ $t('feature.automod.component.notFound') }}</span><br />
          <span class="font-bold align-middle">• {{ $t('feature.automod.component.aiModel') }}:</span>
          <span class="align-middle">
            <code>gpt-3.5-turbo-16k</code> {{ $t('feature.automod.component.byOpenAi') }} </span
          ><br />
          <span class="font-bold align-middle">• {{ $t('feature.automod.component.allowFallbacks') }}: </span>
          <img
            src="/enabled.svg"
            height="16"
            width="16"
            class="inline-flex"
          /><span class="align-middle"> {{ $t('global.enabled') }}</span> <br />
          <span class="font-bold align-middle"
            >• {{ $t('feature.automod.component.enbaledBlacklistedRoles') }}:</span
          ><br />
          <span class="font-bold align-middle">• {{ $t('feature.automod.component.blacklistedChannels') }}:</span
          ><br />
          <br />
          <!-- bad content -->
          <img src="/badcontent.svg" height="22" width="22" class="inline-flex" />
          <span class="font-bold ml-1 align-middle">{{ $t('feature.automod.component.badContentFilter') }}</span
          > <span class="text-deh-white bg-deh-main rounded p-[1px] font-bold">BETA</span><br />
          <img src="/enabled.svg" height="16" width="16" class="inline-flex" />
          <span class="align-middle"> {{ $t('global.enabled') }}</span><br />
          <br />

          <span class="font-bold align-middle">• {{ $t('feature.automod.component.alertChannel') }}: <span class="font-normal">{{ $t('global.none') }}</span></span><br>
          <span class="font-bold align-middle">• {{ $t('feature.automod.component.filter') }}: <span class="font-normal">{{ $t('global.all') }}</span></span><br>
          <span class="font-bold align-middle">• {{ $t('feature.automod.component.aiModel') }}: <span  class="font-normal"><code>text-moderation-stable</code> by OpenAI</span></span><br>
          <span class="font-bold align-middle">• {{ $t('feature.automod.component.blacklistedRoles') }}:</span><br>
          <span class="font-bold align-middle">• {{ $t('feature.automod.component.blacklistedChannels') }}:</span><br>
          <br>
          <img src="/badcontent.svg" height="22" width="22" class="inline-flex" />
          <span class="font-bold ml-1 align-middle">{{ $t('feature.automod.component.toxicFilter') }}</span
          > <span class="text-deh-white bg-deh-main rounded p-[1px] font-bold">BETA</span><br />
          <img src="/enabled.svg" height="16" width="16" class="inline-flex" />
          <span class="align-middle"> {{ $t('global.enabled') }}</span><br />
          <br>
          <span class="font-bold align-middle">• {{ $t('feature.automod.component.alertChannel') }}: <span class="font-normal">{{ $t('global.none') }}</span></span><br>
          <span class="font-bold align-middle">• {{ $t('feature.automod.component.filter') }}: <span class="font-normal">{{ $t('global.all') }}</span></span><br>
          <span class="font-bold align-middle">• {{ $t('feature.automod.component.aiModel') }}: <span  class="font-normal"><code>perspective-v1</code> by Google</span></span><br>
          <span class="font-bold align-middle">• {{ $t('feature.automod.component.blacklistedRoles') }}:</span><br>
          <span class="font-bold align-middle">• {{ $t('feature.automod.component.blacklistedChannels') }}:</span><br>
          
        
        </discord-embed-description>

        <discord-embed-footer slot="footer" footer-image="/logo.png">
          {{ $t('feature.automod.component.footer') }}
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
