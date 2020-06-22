<template>
  <div class="columns level divider is-mobile">
    <div class="column is-3-desktop is-2-widescreen">
      <h2 class="title">{{ title }}</h2>
    </div>
    <div class="column is-0-mobile">
      <hr class="line" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String, required: true },
  },
};
</script>

<style scoped>
.divider {
  margin-bottom: 0;
}

.title {
  font-size: 14px;
  font-weight: bold;
}

.line {
  border: 1px solid rgba(0, 0, 0, 0.22);
}

@media screen and (max-width: 1024px) {
  .title {
    font-size: 13px;
  }
}
</style>
