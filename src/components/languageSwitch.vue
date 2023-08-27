<template>
    <select @change="switchLanguage" class="bg-deh-footer border-deh-border rounded">
        <option v-for="sLocale in supportedLocales" :key="`locale-${sLocale.code}`" :value="sLocale.code"
            :selected="locale === sLocale">
            {{ sLocale.flag }}
        </option>
    </select>
</template>
  
<script lang="ts">
//@ts-ignore
import { useI18n } from 'vue-i18n'
import Tr from "../i18n/translation"

export default {
    setup() {
        const { t, locale } = useI18n()

        const supportedLocales = Tr.supportedLocales

        const switchLanguage = async (event: any) => {
            const newLocale = event.target.value

            await Tr.switchLanguage(newLocale)
        }

        return { t, locale, supportedLocales, switchLanguage }
    }
}
</script>