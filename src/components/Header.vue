<template>
  <header>
    <Logo />
    <Navigations />
    <LanguageSwitcher />
  </header>
</template>

<script>
import Logo from "@/components/Logo";
import Navigations from "@/components/Navigations";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default {
  components: {
    Logo,
    Navigations,
    LanguageSwitcher
  }
};
</script>
