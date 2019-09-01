<template>
  <div class="layout-default">
    <Header />
    <slot></slot>
    <Navigations />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Navigations from "@/components/Navigations";

export default {
  components: {
    Header,
    Navigations
  }
};
</script>
