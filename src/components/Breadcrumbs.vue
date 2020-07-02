<template>
  <div class="breadcrumbs">
    <nav class="breadcrumb" aria-label="breadcrumbs">
      <ul>
        <li>
          <a href="#" @click="goBack">{{ parentPage }}</a>
        </li>
        <li class="is-active">
          <a href="#" aria-current="page">{{ $route.meta.title }}</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  props: {
    parentPage: { type: String, required: true },
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
.breadcrumbs {
  padding-bottom: 20px;
}
</style>
