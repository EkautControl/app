<template>
  <button @click="handleClick" :style="`background-color: #${bgColor}`">
    <div class="text">{{ text }}</div>
    <img v-if="icon !== null" :src="require(`@/assets/${icon}`)" alt="" class="btn-icon">
  </button>
</template>

<script>
export default {
  props: {
    icon: { type: String },
    text: { type: String },
    bgColor: { type: String },
    handleClick: { type: Function, default: () => {} },
  },
};
</script>

style.<style scoped>
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
}

.btn-icon, .text {
  align-self: center;
}

.btn-icon { margin-left: 8px; }
</style>
