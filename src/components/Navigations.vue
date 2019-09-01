<template>
  <div class="navigations">
    <router-link v-if="prev" :to="$i18nRoute(prev)">
      <span class="icon-arrow prev"></span>
    </router-link>
    <router-link v-if="next" :to="$i18nRoute(next)">
      <span class="icon-arrow next"></span>
    </router-link>
  </div>
</template>

<script>
export default {
  computed: {
    prev() {
      return this.$route.meta && this.$route.meta.prev;
    },
    next() {
      return this.$route.meta && this.$route.meta.next;
    }
  }
};
</script>
