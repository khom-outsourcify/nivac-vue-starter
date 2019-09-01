<template>
  <div class="memory">
    <GameInfo>
      <div>
        <span class="label">Time:</span>
        <span class="value">{{ time }}</span>
      </div>
      <div>
        <span class="label">Turns:</span>
        <span class="value">{{ turns }}</span>
      </div>
    </GameInfo>

    <div class="cards">
      <div
        class="card"
        v-for="card in cards"
        :class="{ flipped: card.flipped, found: card.found }"
        @click="flipCard(card)"
      >
        <div class="back"></div>
        <div class="front" :style="{ backgroundImage: 'url(' + card.image + ')' }"></div>
      </div>
    </div>

    <div class="splash" v-if="showSplash">
      <div class="overlay"></div>
      <div class="content">
        <div>
          <h2 class="title">You won!</h2>
          <div class="score">Score: {{ score }}</div>
          <button @click="resetGame()">New game</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import _ from "lodash";
import moment from "moment";
import GameInfo from "./GameInfo";

export default {
  components: {
    GameInfo
  },
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      showSplash: false,
      cards: [],
      started: false,
      startTime: 0,
      turns: 0,
      flipBackTimer: null,
      timer: null,
      time: "--:--",
      score: 0
    };
  },
  methods: {
    shuffle(payload) {
      return _.shuffle([].concat(_.cloneDeep(payload), _.cloneDeep(payload)));
    },
    resetGame() {
      const cards = this.shuffle(this.items);

      this.showSplash = false;
      this.turns = 0;
      this.score = 0;
      this.started = false;
      this.startTime = 0;

      _.each(cards, card => {
        card.flipped = false;
        card.found = false;
      });

      this.cards = cards;
    },
    flippedCards() {
      return _.filter(this.cards, card => card.flipped);
    },
    sameFlippedCard() {
      let flippedCards = this.flippedCards();
      if (flippedCards.length == 2) {
        if (flippedCards[0].name == flippedCards[1].name) return true;
      }
    },
    setCardFounds() {
      _.each(this.cards, card => {
        if (card.flipped) card.found = true;
      });
    },
    checkAllFound() {
      let foundCards = _.filter(this.cards, card => card.found);
      if (foundCards.length == this.cards.length) return true;
    },
    startGame() {
      this.started = true;
      this.startTime = moment();

      this.timer = setInterval(() => {
        this.time = moment(moment().diff(this.startTime)).format("mm:ss");
      }, 1000);
    },
    finishGame() {
      this.started = false;
      clearInterval(this.timer);
      let score =
        1000 -
        (moment().diff(this.startTime, "seconds") - this.items.length * 5) * 3 -
        (this.turns - this.items.length) * 5;
      this.score = Math.max(score, 0);
      this.showSplash = true;
    },
    flipCard(card) {
      if (card.found || card.flipped) return;

      if (!this.started) {
        this.startGame();
      }

      let flipCount = this.flippedCards().length;
      if (flipCount == 0) {
        card.flipped = !card.flipped;
      } else if (flipCount == 1) {
        card.flipped = !card.flipped;
        this.turns += 1;

        if (this.sameFlippedCard()) {
          // Match!
          this.flipBackTimer = setTimeout(() => {
            this.clearFlipBackTimer();
            this.setCardFounds();
            this.clearFlips();

            if (this.checkAllFound()) {
              this.finishGame();
            }
          }, 200);
        } else {
          // Wrong match
          this.flipBackTimer = setTimeout(() => {
            this.clearFlipBackTimer();
            this.clearFlips();
          }, 1000);
        }
      }
    },
    clearFlips() {
      _.map(this.cards, card => (card.flipped = false));
    },
    clearFlipBackTimer() {
      clearTimeout(this.flipBackTimer);
      this.flipBackTimer = null;
    }
  },
  created() {
    this.resetGame();
  }
};
</script>