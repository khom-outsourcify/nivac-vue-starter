<template>
  <div class="home">
    <h1>{{ $t('welcome_message') }}</h1>

    <MemoryGame :items="card" />
  </div>
</template>

<script>
import MemoryGame from "@/components/games/MemoryGame";

export default {
  components: {
    MemoryGame
  },
  data() {
    return {
      card: [
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
    };
  }
};
</script>
