<template>
  <div class="columns level header">
    <div class="column is-two-thirds is-9-tablet is-8-desktop is-9-widescreen">
      <h1 class="title">{{ $route.meta.title }}</h1>
    </div>
    <div class="column btn">
      <slot/>
    </div>
  </div>
</template>

<style scoped>
.header { margin-bottom: 20px; }

.btn {
  display: flex;
  justify-content: flex-end;
}

@media screen and (max-width: 768px) {
  .btn { justify-content: flex-start; }
}
</style>
