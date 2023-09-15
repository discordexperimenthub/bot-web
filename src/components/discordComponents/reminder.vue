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
        :embed-title="$t('feature.msgReminder.title')"
        color="rgba(84, 97, 242, 1)"
      >
        <discord-embed-description slot="description">
            1. {{ $t('feature.msgReminder.ends') }} <discord-time>{{ $t('feature.msgReminder.time4Hours') }}</discord-time><br>
            <code class="multiline mt-2">
                Please remind me!
            </code>
            <br>

            2. {{ $t('feature.msgReminder.ends') }} <discord-time>{{ $t('feature.msgReminder.time3Days') }}</discord-time><br>
            <code class="multiline mt-2">
                ```ts <br>
                type AllowdTypes = string | number | symbol;<br>
                <br>
                type List{{ '<T>' }} = {<br>
                &nbsp;&nbsp;get: (key AllowdTypes) => T;...
            </code>
            <br>

            3. {{ $t('feature.msgReminder.ends') }} <discord-time>{{ $t('feature.msgReminder.time7Days') }}</discord-time><br>
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