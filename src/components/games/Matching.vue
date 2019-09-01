<template>
  <div class="matching" ref="container">
    <div>
      <div class="item zz" @click="onDraw($event, 'left', 1)">
        <div class="item--text">Matching 1</div>
        <div class="item--mark"></div>
      </div>
    </div>

    <div>
      <div class="item" @click="onDraw($event, 'right', 1)">
        <div class="item--mark"></div>
        <div class="item--text">Matching 1</div>
      </div>
    </div>
  </div>
</template>

<script>
import Matching from "./utils/matching";

export default {
  methods: {
    onDraw(event, position, answer) {
      console.log("event, position, answer", event, position, answer);

      const element = event.target.parentElement.classList.contains("item")
        ? event.target.parentElement
        : event.target;

      const instance = Matching(this.$refs.container, element).first();
    }
  }
};
</script>

<style>
</style>