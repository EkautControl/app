<template>
  <div class="column is-4-desktop is-3-widescreen is-3-mobile">
    <div class="card">
      <div class="header" :style="`background-color: #${bgColor}`">
        <p class="title">{{ beer.name }}</p>
      </div>
      <p class="description">
        Tempo médio de produção:
        <ins>{{ beer.averageTime }}</ins
        ><br />
        Cervejaria:
        <ins>{{ beer.brewery }}</ins>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bgColor: '',
    };
  },
  props: {
    beer: { type: Object, required: true },
    isInactive: { type: Boolean, required: false },
  },
  methods: {
    setUpColor() {
      if (this.isInactive) this.bgColor = 'B0B0B0';
      else {
        this.bgColor = this.beer.brewery === 'Ekaut' ? 'E47E00' : '9A2195';
      }
    },
  },
  mounted() {
    this.setUpColor();
  },
};
</script>

<style scoped>
.card {
  min-width: 210px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(168, 168, 168, 0.25);
  border-radius: 15px;
}

.header {
  display: flex;
  align-items: center;
  box-shadow: 0px 4px 4px rgba(168, 168, 168, 0.25);
  border-radius: 15px 15px 0 0;
  text-align: center;
  padding: 8px;
  justify-content: center;
}

.title {
  font-size: 18px;
  text-transform: uppercase;
  font-weight: bold;
  color: white;
}

.description {
  font-weight: bold;
  padding: 10px 12px;
  font-size: 10px;
  text-align: left;
}
</style>
