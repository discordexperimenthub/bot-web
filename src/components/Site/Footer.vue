
<template>
    <div class="bg-deh-footer w-full pb-4">
        <div class="text-center text-deh-main">
            <div class="font-bold">
                <div class="text-2xl">
                    {{ $t('navfoo.title') }}
                </div>
                <!-- Link List -->
                <ul class="flex flex-col items-center m-1">
                    <li>
                        <a href="https://discord.gg/experiments">{{ $t('navfoo.support') }}</a>
                    </li>
                    <li>
                        <a href="https://discord.com/api/oauth2/authorize?client_id=1078340529932222505&permissions=536882192&scope=bot%20applications.commands">{{ $t('navfoo.invite') }}</a>
                    </li>
                    <!-- <li>
                        <a href="https://google.com">{{ $t('navfoo.docs') }}</a>
                    </li> -->
                </ul>
            </div>

            <languageSwitch />

            <div class="text-deh-border text-sm">
                Website: © 2023 Voroniyx <br>
                This website is not affiliated with Discord. All product names, logos, and brands are property of their respective owners.
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import languageSwitch from '../languageSwitch.vue';
</script>