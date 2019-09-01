<template>
  <div class="dnd-game">
    <GameInfo>
      <div>
        <span class="label">Score:</span>
        <span class="value">{{ score }}</span>
      </div>
    </GameInfo>

    <!-- Draggable -->
    <div class="draggable">
      <Container
        v-for="(item, index) in items"
        :key="index"
        :group-name="item.group"
        :get-child-payload="i => item.drag"
        :should-accept-drop="(src, payload) => getShouldAcceptDrop(index, src, payload)"
        @drop="onDrop(index, 'drag', $event)"
      >
        <Draggable v-if="item.drag.data">
          <div class="item">{{ item.drag.data }}</div>
        </Draggable>
      </Container>
    </div>

    <!-- Droppable -->
    <div class="droppable">
      <Container
        v-for="(item, index) in items"
        :key="index"
        :group-name="item.group"
        :get-child-payload="i => item.drop"
        :should-accept-drop="(src, payload) => getShouldAcceptDrop(index, src, payload)"
        @drop="onDrop(index, 'drop', $event)"
      >
        <div v-if="item.drop.data">
          <div class="item">{{ item.drop.data }}</div>
        </div>
        <div v-else>
          <div class="item placeholder">{{ item.drag.data }}</div>
        </div>
      </Container>
    </div>
  </div>
</template>

<script>
import { Container, Draggable, smoothDnD } from "vue-smooth-dnd";
import _ from "lodash";
import GameInfo from "./GameInfo";

export default {
  components: {
    Container,
    Draggable,
    GameInfo
  },
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    score() {
      return this.items.filter(item => !!item.drop.data).length;
    }
  },
  methods: {
    applyDrag(arr, dragResult) {
      const { removedIndex, addedIndex, payload } = dragResult;
      if (removedIndex === null && addedIndex === null) return arr;
      if (addedIndex !== null) return payload;
      return {};
    },
    onDrop(index, collection, dropResult) {
      this.items[index][collection] = this.applyDrag(
        this.items[index][collection],
        dropResult
      );
    },
    getShouldAcceptDrop(index, src, payload) {
      return this.items[index].group === src.groupName;
    }
  }
};
</script>
