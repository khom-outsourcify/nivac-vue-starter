<template>
  <header>
    <Logo />
    <Menu />
    <LanguageSwitcher />
  </header>
</template>

<script>
import Logo from "@/components/Logo";
import Menu from "@/components/Menu";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default {
  components: {
    Logo,
    Menu,
    LanguageSwitcher
  }
};
</script>
