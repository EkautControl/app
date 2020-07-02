<template>
  <div class="columns detail-card">
    <div class="column is-two-fifths">
      <h1 class="beer-title">{{ beer.name }}</h1>
    </div>
    <div class="column details">
      <h2 class="beer-subtitle">Cervejaria:</h2>
      <p class="beer-detail">{{ beer.brewery }}</p>
    </div>
    <div class="column details">
      <h2 class="beer-subtitle">Tipo:</h2>
      <p class="beer-detail">{{ beerTypes[beer.type].label }}</p>
    </div>
    <div class="column details">
      <h2 class="beer-subtitle">Tempo médio de produção:</h2>
      <p class="beer-detail">{{ beer.averageTime }} dias</p>
    </div>
  </div>
</template>

<script>
import BeerTypes from '@/enums/beerType';

export default {
  data() {
    return {
      beer: this.$store.getters.getSelectedBeer,
      beerTypes: BeerTypes,
    };
  },
};
</script>

<style scoped>
.detail-card {
  margin: 10px auto;
  width: 100%;
  padding: 40px 10px;
  background-color: white;
  border-radius: 5px;
  text-transform: uppercase;
  align-items: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
}

.beer-title {
  text-align: left;
  font-size: 32px;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.68);
}

.details {
  margin: auto 10px;
}

.beer-subtitle {
  font-size: 12px;
  color: rgba(128, 128, 128, 0.68);
}

.beer-detail {
  font-size: 18px;
  font-weight: bold;
  color: #747474;
}

@media screen and (min-width: 769px) {
  .beer-title {
    text-align: center;
    border-right: 1px solid rgba(0, 0, 0, 0.5);
  }
}
</style>
