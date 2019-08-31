<template>
  <div class="layout-default">
    <Header />
    <slot></slot>
  </div>
</template>

<script>
import Header from "@/components/Header";

export default {
  components: {
    Header
  }
};
</script>
