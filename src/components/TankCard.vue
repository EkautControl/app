<template>
  <div class="column is-4-desktop is-3-widescreen">
    <div class="card">
      <div class="header">
        <p class="header-value">{{ tank.tank }}</p>
        <div class="title-box">
          <p class="subtitle">{{ tank.beer.brewery }} | LOTE {{ tank.production.batch }}</p>
          <p class="title">American IPA</p>
        </div>
      </div>
      <hr class="card-divider" />
      <p class="description">
        Previsão de término:
        <ins>{{ remainingTime }}</ins>
      </p>
      <div class="footer" :style="`background-color: #${phaseColor}`">
        <p class="phase-title">{{ phaseTitle }}</p>
      </div>
      <img v-if="hasProblem" src="@/assets/alert.svg" class="status-indicator" />
    </div>
  </div>
</template>

<script>
import Phases from '../enums/productionPhase';

export default {
  data() {
    return {
      remainingTime: null,
      phaseTitle: '',
      phaseColor: '',
    };
  },
  props: {
    tank: { type: Object, required: true },
    hasProblem: { type: Boolean },
  },
  methods: {
    setUpTanksDigits() {
      this.tank.tank = this.tank.tank.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });
    },
    setUpRemainingTime() {
      this.remainingTime = new Date(this.tank.production.startDate).toLocaleDateString('en-GB');
    },
    setUpPhase() {
      this.phaseTitle = Phases[this.tank.production.phase].label;
      this.phaseColor = Phases[this.tank.production.phase].color;
    },
  },
  mounted() {
    this.setUpTanksDigits();
    this.setUpRemainingTime();
    this.setUpPhase();
  },
};
</script>

<style scoped>
.card {
  min-width: 240px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(168, 168, 168, 0.25);
  border-radius: 15px;
}

.header {
  padding-left: 12px;
  display: flex;
  align-items: center;
}

.header-value {
  font-size: 42px;
  margin-right: 7px;
  font-weight: bold;
}

.title {
  font-size: 18px;
  text-transform: uppercase;
  font-weight: bold;
}

.subtitle {
  font-weight: normal;
  font-size: 11px;
  text-transform: uppercase;
  margin-bottom: 20px;
}

.card-divider {
  width: 60%;
  margin: auto;
  border: 1px solid rgba(0, 0, 0, 0.44);
  opacity: 20%;
}

.description {
  font-weight: bold;
  margin: 10px 12px;
  font-size: 10px;
  text-align: center;
}

.footer {
  box-shadow: 0px 4px 4px rgba(168, 168, 168, 0.25);
  border-radius: 0 0 15px 15px;
  text-align: center;
  padding: 8px;
  background-color: #525252;
}

.phase-title {
  font-size: 13px;
  line-height: 18px;
  color: #ffffff;
  text-transform: uppercase;
  font-weight: bold;
}

.status-indicator {
  position: absolute;
  top: 0;
  right: 0;
  margin: 10px;
}

@media screen and (max-width: 768px) {
  .header { padding-left: 25px; }
}

@media screen and (max-width: 1024px) {
  /* .card { min-width: 240px; } */
}
</style>
