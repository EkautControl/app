<template>
  <div class="info-card white">
    <p class="card-title" style="margin-bottom: 15px;">Informações da produção</p>

    <div class="columns is-mobile is-1">
      <div class="column is-one-third">
        <p class="info-title">EXTRATO INICIAL:</p>
        <p class="info">{{ initialWheat }}</p>
      </div>
      <div class="column is-one-third">
        <p class="info-title">VOLUME INICIAL:</p>
        <p class="info">{{ initialVolume }}L</p>
      </div>
      <div class="column is-one-third">
        <p class="info-title">PH INICIAL:</p>
        <p class="info">{{ initialPh }} pH</p>
      </div>
    </div>
    <div class="columns is-mobile is-1">
      <div class="column is-one-third">
        <p class="info-title">FERMENTO:</p>
        <p class="info">{{ production.ferment }}</p>
      </div>
      <div class="column is-one-third">
        <p class="info-title">LEVEDURA:</p>
        <p class="info">{{ production.leaven }}</p>
      </div>
      <div class="column is-one-third">
        <p class="info-title">GERAÇÂO:</p>
        <p class="info">{{ production.generation }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    initialWheat() {
      return this.getProductionData(5);
    },
    initialVolume() {
      return this.getProductionData(0);
    },
    initialPh() {
      return this.getProductionData(3);
    },
  },
  methods: {
    getProductionData(type) {
      const phase = this.production.data[this.production.data.length - 1];

      if (phase !== undefined) {
        const data = phase.data.filter((d) => d.type === type);

        if (data.length > 0) return data[0].value;
      }

      return '--';
    },
  },
  props: {
    production: { type: Object, required: true },
  },
};
</script>
