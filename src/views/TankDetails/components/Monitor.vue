<template>
  <div class="info-card">
    <div class="columns">
      <div class="column is-two-thirds level-left">
        <p class="card-title">Monitoramento</p>
        <p class="card-description">Atualizado {{ lastUpdate }}</p>
      </div>
    </div>

    <div class="columns is-vcentered">
      <div class="column">
        <div class="info-box is-relative">
          <label>TEMPERATURA</label>
          <div class="value">{{ firstValue }}°C</div>
          <img
            class="icon level-right"
            src="@/assets/thermometer2.svg"
            style="
              filter: invert(92%) sepia(0%) saturate(116%) hue-rotate(214deg) brightness(94%)
                contrast(77%);
            "
          />
        </div>
      </div>
      <div class="column">
        <p class="observation">{{ second }}</p>
        <div class="horizontal-divider" style="margin: 7px 0;" />
        <p class="observation">{{ third }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstValue: '',
      lastUpdate: '',
      second: '',
      third: '',
    };
  },
  methods: {
    setTemperatures(obj) {
      return `${new Date(obj.creationDate).toLocaleString('en-GB')} - ${obj.value}ºC`;
    },
  },
  computed: {
    temperatures() {
      return this.$store.getters['tank/getTemperatures'];
    },
  },
  watch: {
    temperatures() {
      this.firstValue = this.temperatures[0] ? this.temperatures[0].value : '';
      this.lastUpdate = this.temperatures[0]
        ? new Date(this.temperatures[0].creationDate).toLocaleString('en-GB')
        : '';
      this.second = this.temperatures[1] ? this.setTemperatures(this.temperatures[1]) : '';
      this.third = this.temperatures[2] ? this.setTemperatures(this.temperatures[2]) : '';
    },
  },
};
</script>
