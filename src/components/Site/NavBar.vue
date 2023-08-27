<template>
    <div class="p-2 min-w-full top-0 z-40 bg-deh-footer">
        <div class="flex">
            <div class="w-full m-1 flex justify-start">
                <div class="text-deh-white rounded blue text-4xl font-bold p-2">
                    Experiment Hub Bot
                </div>
            </div>

            <div class="w-full m-1 flex justify-center">
                <ul class="text-deh-second font-bold text-2xl align-middle p-2 navbar-ul-item">

                    <!-- Language Button -->

                    <li class="navbar-li-item">
                        <a class="drop-shadow-[0_2px_20px_rgba(84,97,242,1)]">
                            <button class="">
                                Invite
                            </button>
                        </a>
                    </li>
                    <li class="navbar-li-item">
                        <a class="drop-shadow-[0_2px_20px_rgba(84,97,242,1)]">
                            <button>
                                Support
                            </button>
                        </a>
                    </li>
                    <li class="navbar-li-item">
                        <a class="drop-shadow-[0_2px_20px_rgba(84,97,242,1)]">
                            <button>
                                Test
                            </button>
                        </a>
                    </li>

                    <li class="navbar-li-item">
                        <LanguageSwitch />
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import LanguageSwitch from '../languageSwitch.vue';
</script>