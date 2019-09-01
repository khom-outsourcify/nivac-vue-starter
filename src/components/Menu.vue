<template>
  <nav class="menu">
    <router-link
      :class="{active: currentPage.includes('home')}"
      :to="$i18nRoute({ name: 'home' })"
    >Home Page</router-link>
    <router-link
      :class="{active: currentPage.includes('about')}"
      :to="$i18nRoute({ name: 'about' })"
    >About Page</router-link>
    <router-link
      :class="{active: currentPage.includes('games')}"
      :to="$i18nRoute({ name: 'games', params: { game: 'memory' } })"
    >Games</router-link>
  </nav>
</template>

<script>
export default {
  computed: {
    currentPage() {
      return this.$route.name;
    }
  }
};
</script>