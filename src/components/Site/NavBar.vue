<template>
    <div class="relative flex flex-wrap items-center justify-between px-2 py-3 bg-deh-black">
        <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
            <div class="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
                <div class="w-full m-1 flex justify-start">
                    <div class="text-deh-white rounded blue text-4xl font-bold p-2">
                        {{ $t('navfoo.title') }} <span class="text-deh-white bg-deh-main rounded p-[2px] text-xs align-top font-bold">BOT</span>
                    </div>
                </div>
                <button
                    class="cursor-pointer text-xl leading-none px-3 py-1 rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                    type="button" v-on:click="toggleNavbar()">
                    🟰
                </button>
            </div>
            <div v-bind:class="{ 'hidden': !showMenu, 'flex': showMenu }"
                class="lg:flex lg:flex-grow items-center text-deh-main bg-deh-server-slider rounded lg:bg-transparent w-full lg:w-auto">
                <ul class="flex flex-col lg:flex-row list-none lg:ml-auto navbar-ul-item">
                    <li class="navbar-li-item">
                        <a class="px-3 py-2 flex items-center text-xs uppercase font-bold hover:opacity-75">
                            <span class="ml-2 lg:drop-shadow-[0_2px_20px_rgba(84,97,242,1)] text-xl">{{ $t('navfoo.invite') }}</span>
                        </a>
                    </li>
                    <li class="navbar-li-item">
                        <a class="px-3 py-2 flex items-center text-xs uppercase font-bold hover:opacity-75">
                            <span class="ml-2 lg:drop-shadow-[0_2px_20px_rgba(84,97,242,1)] text-xl">{{ $t('navfoo.support') }}</span>
                        </a>
                    </li>
                    <!-- <li class="navbar-li-item">
                        <a class="px-3 py-2 flex items-center text-xs uppercase font-bold hover:opacity-75">
                            <span class="ml-2 lg:drop-shadow-[0_2px_20px_rgba(84,97,242,1)] text-xl">{{ $t('navfoo.docs') }}</span>
                        </a>
                    </li> -->
                </ul>
            </div>
        </div>
    </div>
</template>
  
<script lang="ts">
export default {
    data() {
        return {
            showMenu: false
        }
    },
    methods: {
        toggleNavbar: function () {
            this.showMenu = !this.showMenu;
        }
    }
}
</script>