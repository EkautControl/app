<template>
  <button @click="handleClick" :style="`background-color: #${bgColor}`" :class="`${size}`">
    <div class="text">{{ text }}</div>
    <img v-if="icon" :src="require(`@/assets/${icon}`)" alt="" class="btn-icon" />
  </button>
</template>

<script>
export default {
  props: {
    icon: { type: String },
    size: { type: String, default: '' },
    text: { type: String, default: 'Novo botão' },
    bgColor: { type: String, default: '3396E1' },
    handleClick: { type: Function, default: () => {} },
  },
};
</script>

<style scoped>
button {
  border: none;
  color: white;
  padding: 0 15px;
  height: 35px;
  align-self: center;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 11px;
  border-radius: 5px;
  display: flex;
  box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.3);
  cursor: pointer;
}

.btn-icon,
.text {
  align-self: center;
}

.btn-icon {
  margin-left: 8px;
}

.lg {
  font-size: 14px;
  padding: 10px 20px;
}

@media screen and (max-width: 1044px) {
  .lg {
    font-size: 12px;
  }
}
</style>
