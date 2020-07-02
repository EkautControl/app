<template>
  <div class="info-card">
    <div class="columns level">
      <div class="column is-two-thirds level-left">
        <p class="card-title">Registro</p>
        <p class="card-description">Atualizado 11/06/2020 às 16:32 por Luan França</p>
      </div>
      <div class="column">
        <div class="level level-right">
          <Button
            text="REGISTRAR"
            bg-color="3396E1"
            :handle-click="handleAddRegistryForm"
            icon="plus.svg"
          ></Button>
        </div>
      </div>
    </div>
    <div class="columns is-multiline">
      <div class="column is-half" v-for="(data, index) in currentPhaseData" v-bind:key="index">
        <div class="info-box is-relative">
          <label>{{ getDataLabel(data.type) }}</label>
          <p class="value">{{ data.value }}{{ getDataSuffix(data.type) }}</p>
          <p class="observation">
            ANTERIOR:
            <ins>{{ lastPhaseData(data.type) }}{{ getDataSuffix(data.type) }}</ins>
          </p>
          <img class="icon level-right" :src="require(`@/assets/${getDataIcon(data.type)}`)" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from '@/components/Button.vue';
import PhasesData from '@/enums/productionData';
import AddRegistryForm from './AddRegistryForm.vue';

export default {
  components: {
    Button,
  },
  methods: {
    getDataLabel(dataType) {
      return PhasesData[dataType].label;
    },
    getDataSuffix(dataType) {
      return PhasesData[dataType].suffix;
    },
    getDataIcon(dataType) {
      return PhasesData[dataType].icon;
    },
    lastPhaseData(dataType) {
      const phaseData = this.getPhaseData(this.production.data.length - 2);

      if (phaseData.length !== 0) {
        const data = phaseData.filter((d) => dataType === d.type);
        if (data.length !== 0) {
          return data[0].value;
        }
      }

      return '--';
    },
    getPhaseData(position) {
      const phase = this.production.data[position];
      return phase === undefined ? [] : phase.data;
    },
    handleAddRegistryForm() {
      this.$buefy.modal.open({
        parent: this,
        component: AddRegistryForm,
        hasModalCard: true,
        customClass: 'production-form',
        trapFocus: true,
        canCancel: ['escape', 'outside'],
        scroll: 'keep',
        events: {
          onSuccess: (data) => {
            this.$store.dispatch('tank/addRegistry', {
              ...data,
              reporter: this.$store.getters.getUserName,
              phase: this.production.phase,
              productionId: this.production._id,
            });
          },
        },
      });
    },
  },
  computed: {
    currentPhaseData() {
      return this.getPhaseData(this.production.data.length - 1).filter((data) => data.type !== 2);
    },
  },
  props: {
    production: { type: Object, required: true },
  },
};
</script>
