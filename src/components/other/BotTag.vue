<template>
    <span class="discord-bot-tag text-white" :class="'text-[' + textSize + ']'">
        <span v-if="verified">✔️</span> Bot
    </span>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
defineProps({
    verified: Boolean as PropType<boolean>,
    textSize: {
        type: String as PropType<string>,
        default: "0.555rem"
    }
})
</script>

<style>
.discord-bot-tag {
    background-color: #5865f2;
    margin-left: 5px;
    padding: 3px;
    border-radius: 3px;
    line-height: 100%;
    text-transform: uppercase;
}
</style>