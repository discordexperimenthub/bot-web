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
                    <p class="text-white font-medium mt-3 sm:mt-0 sm:mb-3 ">{{ $t('navfoo.titleSocial') }}</p>
                    <div>
                        <a href="https://canary.discord.com/api/oauth2/authorize?client_id=1078340529932222505&permissions=536882192&scope=applications.commands%20bot"
                            target="_blank" :class="footerItemCSSClassList">
                            <i class="fa fa-plus" /> {{ $t('navfoo.invite') }}
                        </a>
                    </div>
                    <div>
                        <a :class="footerItemCSSClassList" href="https://discord.gg/experiments">
                            <i class="fa-brands fa-discord" /> {{ $t('navfoo.support') }}
                        </a>
                    </div>
                    <!-- <div>
                        <a href="https://discord.gg/sj3ZTNn9d7" target="_blank" :class="footerItemCSSClassList">
                            <i class="fa-brands fa-discord" /> {{ $t('navfoo.appDirectory') }}
                        </a>
                    </div> -->
                    <div>
                        <a :class="footerItemCSSClassList" href="https://github.com/discordexperimenthub">
                            <i class="fa-brands fa-github" /> {{ $t('navfoo.github') }}
                        </a>
                    </div>
                </div>
                <div class="col-span-1">
                    <p class="text-white font-medium mt-3 sm:mt-0 sm:mb-3">{{ $t('navfoo.titleImportand') }}</p>
                    <div>
                        <a :class="footerItemCSSClassList"
                            href="https://github.com/discordexperimenthub/deh-bot/blob/main/resources/terms-of-service.md">
                            <i class="fa-solid fa-file-shield" /> {{ $t('navfoo.tos') }}
                        </a>
                    </div>
                    <div>
                        <a :class="footerItemCSSClassList"
                            href="https://github.com/discordexperimenthub/deh-bot/blob/main/resources/privacy-policy.md">
                            <i class="fa-solid fa-user-shield" /> {{ $t('navfoo.pp') }}
                        </a>
                    </div>
                </div>
            </div>
            <div class="mt-10 grid content-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                <p class="sm:text-left"></p>
                <div class="hidden md:flex items-center justify-center">
                    <p class="text-deh-border text-xs text-center">
                        {{ $t('navfoo.cr', { year: getCopyrightYear() }) }}<br />
                        {{ $t('navfoo.crNote') }}
                    </p>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup lang="ts">
function getCopyrightYear(): string {
    return new Date().getFullYear() === 2023 ? '2023' : `2023 - ${new Date().getFullYear()}`
}

const showLinks = () => {
    return false;
}

const colSpanAmount = () => {
    return showLinks() ? 'col-span-3' : 'col-span-4'
}

const footerItemCSSClassList = '!text-white/50 hover-underline-animation'

</script>