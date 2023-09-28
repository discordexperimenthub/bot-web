<template>
    <footer class="p-10 bg-deh-footer">
        <div class="pt-10 lg:mx-24">
            <div class="lg:grid lg:grid-cols-6 gap-20">
                <div :class="colSpanAmount()"> <!-- TODO: col-span-4 ohne lega notice  -->
                    <div class="flex items-center space-x-5">
                        <img src="/logo.png" class="rounded-full w-12" />
                        <p class="font-semibold text-xl text-white">{{ $t('navfoo.title') }}</p>
                    </div>
                </div>
                <div class="col-span-1">
                    <p class="text-white font-medium mt-3 sm:mt-0 sm:mb-3">Links</p>
                    <div>
                        <a href="https://discord.gg/sj3ZTNn9d7" target="_blank" :class="footerItemCSSClassList">
                            <i class="fa-brands fa-discord" /> Support Server
                        </a>
                    </div>
                    <div>
                        <a href="https://discord.gg/sj3ZTNn9d7" target="_blank" :class="footerItemCSSClassList">
                            <i class="fa-brands fa-discord" /> App Directory <!-- TODO -->
                        </a>
                    </div>
                    <div>
                        <a href="https://discord.com/oauth2/authorize?client_id=905083832695398481&permissions=1101726575634&redirect_uri=https%3A%2F%2Fbot.voroniyx.xyz&response_type=code&scope=bot%20applications.commands"
                            target="_blank" :class="footerItemCSSClassList">
                            <i class="fa fa-plus" /> Invite Bot
                        </a>
                    </div>
                </div>
                <div class="col-span-1">
                    <p class="text-white font-medium mt-3 sm:mt-0 sm:mb-3 ">Social</p>
                    <div>
                        <a :class="footerItemCSSClassList" :href="urlList.support.url">
                            <i class="fa-brands fa-discord" /> {{ $t(urlList.support.label) }}
                        </a>
                    </div>
                    <div>
                        <a :class="footerItemCSSClassList" href="">
                            <i class="fa-brands fa-github" /> Github
                        </a>
                    </div>
                </div>
                <div class="col-span-1" v-if="showImportand()">
                    <p class="text-white font-medium mt-3 sm:mt-0 sm:mb-3">Important</p>
                    <div>
                        <a :class="footerItemCSSClassList" href="https://github.com/discordexperimenthub/deh-bot/blob/main/resources/terms-of-service.md">
                            <Terms class="fa-solid fa-file-shield" /> Terms of Service
                        </a>
                    </div>
                    <div>
                        <a :class="footerItemCSSClassList" href="https://github.com/discordexperimenthub/deh-bot/blob/main/resources/privacy-policy.md">
                            <i class="fa-solid fa-user-shield" /> Privacy Policy
                        </a>
                    </div>
                </div>
            </div>
            <div class="mt-10 grid content-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                <p class="sm:text-left"></p>
                <div class="hidden md:flex items-center justify-center">
                    <p class="text-deh-border text-xs text-center">
                        Website: © {{ getCopyrightYear() }} Voroniyx <br />
                        This website is not affiliated with Discord. All product names, logos,
                        and brands are property of their respective owners.
                    </p>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup lang="ts">
import urlList from '../../func/url.list.ts'

function getCopyrightYear(): string {
    return new Date().getFullYear() === 2023 ? '2023' : `2023 - ${new Date().getFullYear()}`
}

const showImportand = () => {
    return true;
}

const colSpanAmount = () => {
    return showImportand() ? 'col-span-3' : 'col-span-4'
}

const footerItemCSSClassList = '!text-white/50 hover-underline-animation'

</script>