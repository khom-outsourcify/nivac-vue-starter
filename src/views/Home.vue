<template>
  <div class="home">
    <h1>{{ $t('welcome-message') }}</h1>
    <GameList />
  </div>
</template>

<script>
import GameList from "../components/list/GameList";

export default {
  components: {
    GameList
  }
};
</script>