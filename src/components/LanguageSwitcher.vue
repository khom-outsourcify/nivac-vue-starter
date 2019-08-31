<template>
  <div class="language-switcher" ref="switcher">
    <div
      class="language-switcher--current"
      @click="opened = !opened"
    >{{ getLanguageName(currentLanguage)|capitalize }}</div>
    <transition name="fade">
      <ul class="language-switcher--list" v-if="opened && languages.length > 1">
        <li
          v-for="(language, index) in languages"
          :key="index"
          v-if="!isCurrentLanguage(language.iso)"
          @click.prevent="changeLanguage(language.iso)"
        >{{ language.label }}</li>
      </ul>
    </transition>
  </div>
</template>

<script>
import { translation } from "@/plugins/translation";
import { LANGUAGES } from "@/constants/trans";

export default {
  data() {
    return {
      opened: false,
      languages: LANGUAGES
    };
  },
  computed: {
    supportedLanguages() {
      return translation.supportedLanguages;
    },
    currentLanguage() {
      return translation.currentLanguage;
    }
  },
  methods: {
    changeLanguage(lang) {
      const to = this.$router.resolve({ params: { lang } });
      return translation.changeLanguage(lang).then(() => {
        this.$router.push(to.location);
        this.opened = false;
      });
    },
    isCurrentLanguage(lang) {
      return lang === this.currentLanguage;
    },
    documentClick(e) {
      const el = this.$refs.switcher;
      const target = e.target;

      if (el !== target && !el.contains(target)) {
        this.opened = false;
      }
    },
    getLanguageName(iso) {
      return this.languages.find(l => l.iso === iso)
        ? this.languages.find(l => l.iso === iso).label
        : `Undefined iso "${iso}" in languages.`;
    }
  },
  mounted() {
    document.addEventListener("click", this.documentClick);
  },
  destroyed() {
    // important to clean up!!
    document.removeEventListener("click", this.documentClick);
  }
};
</script>