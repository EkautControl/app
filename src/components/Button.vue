<template>
  <button @click="handleClick" :style="`background-color: #${bgColor}`">
    <img v-if="icon !== null" :src="require(`@/assets/${icon}`)" alt="" class="btn-icon">
    <div class="text">{{ text }}</div>
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
  padding: 0 20px;
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

.btn-icon { margin-right: 10px; }
</style>
