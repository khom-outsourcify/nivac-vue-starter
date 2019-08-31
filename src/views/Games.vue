<template>
  <div class="games">
    <div class="sidebar">
      <h2>Games</h2>
      <GameList class="light" />
    </div>
    <div class="view">
      <h2>{{ $t(this.$route.params.game) }}</h2>
      <component :is="game" v-bind="demo[game]" />
    </div>
  </div>
</template>

<script>
import GameList from "../components/list/GameList";
import MemoryGame from "@/components/games/MemoryGame";
import DnD from "@/components/games/DnD";

export default {
  components: {
    GameList,
    "memory-game": MemoryGame,
    "drag-and-drop": DnD
  },
  data() {
    return {
      demo: {
        "memory-game": {
          items: [
            {
              name: "vue",
              image: require("@/assets/images/vue.png")
            },
            {
              name: "express",
              image: require("@/assets/images/express.png")
            },
            {
              name: "mongo",
              image: require("@/assets/images/mongo.png")
            },
            {
              name: "nodejs",
              image: require("@/assets/images/nodejs.svg")
            },
            {
              name: "webpack",
              image: require("@/assets/images/webpack.png")
            },
            {
              name: "babel",
              image: require("@/assets/images/babel.svg")
            }
          ]
        }
      }
    };
  },
  computed: {
    game() {
      return this.$route.params.game;
    }
  }
};
</script>