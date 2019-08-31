<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>
function magic() {
  $(window).resize(function() {
    $("html").css("font-size", calc());
  });
  $("html").css("font-size", calc());
}

export default {
  computed: {
    layout() {
      return `${this.$route.meta.layout || "default"}-layout`;
    }
  },
  created() {
    this.magic();
  }
};
</script>
