<template>
  <div class="values-section">
    <Divider title="Valores ideais" />
    <div class="columns">
      <div class="column is-5">
        <div class="values-card">
          <p class="phase-title">Cervejas do tipo {{ beerType[type].label }}:</p>
          <p class="values">Temperatura inicial (70% da produção): {{ initialTemp }}ºC</p>
          <p class="values">Temperatura final (30% da produção): {{ finalTemp }}ºC</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import beerType from '@/enums/beerType';
import Divider from '@/components/Divider.vue';

export default {
  components: { Divider },
  data() {
    return {
      type: this.$store.getters.getSelectedBeer.type,
      initialTemp: 0,
      finalTemp: 0,
      beerType,
    };
  },
  methods: {
    setTemps() {
      this.initialTemp = beerType[this.type].initialTemp;
      this.finalTemp = beerType[this.type].finalTemp;
    },
  },
  beforeMount() {
    this.setTemps();
  },
};
</script>

<style>
.values-section {
  margin: 20px auto;
}

.values-card {
  width: 100%;
  background: #e4e5ec;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  padding: 20px 30px;
}

.phase-title {
  color: #02093b;
  font-weight: bold;
}

.values {
  color: rgba(0, 0, 0, 0.5);
  font-size: 15px;
}
</style>
