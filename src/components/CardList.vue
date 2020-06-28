<template>
  <ul class="columns is-mobile card-list">
    <h1 v-if="empty" class="empty-list">Vazio</h1>
    <slot />
  </ul>
</template>

<script>
export default {
  props: ['empty'],
};
</script>

<style scoped>
.card-list {
  flex-direction: row;
  flex-wrap: wrap;
}

.empty-list {
  padding: 5px 13px;
}
</style>
