<template>
  <ul class="columns is-mobile card-list">
    <slot />
  </ul>
</template>

<style scoped>
.card-list {
  flex-direction: row;
  flex-wrap: wrap;
}
</style>
