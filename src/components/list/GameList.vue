<template>
  <ul class="list">
    <li>
      <router-link :to="$i18nRoute({ name: 'games', params: {game: `memory`} })">{{ $t('memory') }}</router-link>
    </li>
    <li>
      <router-link
        :to="$i18nRoute({ name: 'games', params: {game: `drag-and-drop`} })"
      >{{ $t('drag-and-drop') }}</router-link>
    </li>
  </ul>
</template>
