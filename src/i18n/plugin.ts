import { Plugin } from "vue";
import { useI18n } from "vue-i18n";

const myI18nPlugin: Plugin<[]> = {
  install: (app) => {
    app.config.globalProperties.$tr = (key: string) => {
      const { t } = useI18n();
      return t(key);
    };
  },
};

export default myI18nPlugin;
