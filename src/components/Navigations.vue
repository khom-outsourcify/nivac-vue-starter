<template>
  <nav class="navigations">
    <router-link :to="$i18nRoute({ name: 'home'})">Home Page</router-link>
    <router-link :to="$i18nRoute({ name: 'about'})">About Page</router-link>
  </nav>
</template>

<script>
export default {};
</script>
