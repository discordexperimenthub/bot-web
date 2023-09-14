import type { DiscordMessageOptions from '@skyra/discord-components-core';
<template>
  <discord-messages>
    <discord-message profile="dehBot" ephemeral>
      <discord-command
        slot="reply"
        profile="voron"
        command="/message-reminders-list"
      ></discord-command>
      <discord-embed
        slot="embeds"
        embed-title="Message Reminders"
        color="rgba(84, 97, 242, 1)"
      >
        <discord-embed-description slot="description">
            1. Ends <discord-time>in 4 hours</discord-time><br>
            <code class="multiline mt-2">
                Please remind me!
            </code>
            <br>

            2. Ends <discord-time>in 3 days</discord-time><br>
            <code class="multiline mt-2">
                ```ts <br>
                type AllowdTypes = string | number | symbol;<br>
                <br>
                type List{{ '<T>' }} = {<br>
                &nbsp;&nbsp;get: (key AllowdTypes) => T;...
            </code>
            <br>

            3. Ends <discord-time>in 7 days</discord-time><br>
            <code class="multiline mt-2">
                {{ '&nbsp;<@1078340529932222505> Please remind me' }}
            </code>
        </discord-embed-description>

        <discord-embed-footer slot="footer" footer-image="/logo.png">
          Made with ❤️ by discord.gg/experiments
        </discord-embed-footer>
      </discord-embed>
    </discord-message>
  </discord-messages>
</template>

<style scoped>
.code-block {
    font-family: Consolas;
    background-color: #2b2d31;
}
</style>