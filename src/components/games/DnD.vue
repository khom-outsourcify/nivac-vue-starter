<template>
  <div class="dnd-game">
    <!-- Draggable -->
    <div class="draggable">
      <Container
        v-for="(item, index) in dndItems"
        :key="index"
        :group-name="item.group"
        :get-child-payload="i => item.drag"
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
        v-for="(item, index) in dndItems"
        :key="index"
        :group-name="item.group"
        :get-child-payload="i => item.drop"
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

export default {
  components: { Container, Draggable },
  data() {
    return {
      dndItems: new Array(5).fill({}).map((item, i) => {
        return {
          group: `group-${i}`,
          drag: {
            id: i,
            data: `Draggable - ${i}`
          },
          drop: {}
        };
      })
    };
  },
  methods: {
    shuffle(payload) {
      return _.shuffle();
    },
    applyDrag(arr, dragResult) {
      const { removedIndex, addedIndex, payload } = dragResult;
      if (removedIndex === null && addedIndex === null) return arr;
      if (addedIndex !== null) return payload;
      return {};
    },
    onDrop(index, collection, dropResult) {
      this.dndItems[index][collection] = this.applyDrag(
        this.dndItems[index][collection],
        dropResult
      );
    }
  }
};
</script>
