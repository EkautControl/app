<template>
  <div class="info-card white">
    <div class="columns level">
      <div class="column level-left">
        <p id="tank-title">TANQUE {{ tank.tank }}</p>
        <p id="tank-description">
          {{ tank.beer.name }} <span>&#183;</span> {{ tank.beer.brewery }} <span>&#183;</span> LOTE
          {{ tank.production.batch }}
        </p>
      </div>
      <div class="column">
        <div class="level level-right">
          <Button
            text="Avançar a fase"
            bg-color="3396E1"
            icon="arrow-right.svg"
            custom-class="change-phase-btn"
            :handle-click="handleSkipPhaseForm"
          ></Button>
        </div>
      </div>
    </div>
    <div class="columns">
      <div class="column" style="padding-bottom: 0; padding-top: 0;">
        <div class="horizontal-divider"></div>
      </div>
    </div>
    <div class="columns level">
      <div class="column is-one-third level-left">
        <p class="info-title">FASE DA PRODUÇÂO:</p>
        <p class="info phase-label" :style="`background-color: #${phaseColor}`">{{ phaseLabel }}</p>
      </div>
      <div class="column is-one-third level-left">
        <p class="info-title">INÍCIO DA PRODUÇÃO:</p>
        <p class="info">{{ startDate }}</p>
      </div>
      <div class="column is-one-third level-left">
        <p class="info-title">PRÓXIMA FASE:</p>
        <p class="info">{{ endDate }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Button from '@/components/Button.vue';
import Phases from '@/enums/productionPhase';
import SkipPhaseForm from './SkipPhaseForm.vue';

export default {
  components: {
    Button,
  },
  methods: {
    handleSkipPhaseForm() {
      this.$buefy.modal.open({
        parent: this,
        component: SkipPhaseForm,
        hasModalCard: true,
        customClass: 'production-form',
        trapFocus: true,
        canCancel: ['escape', 'outside'],
        scroll: 'keep',
        events: {
          onSuccess: (phase) => {
            this.$store.dispatch('tank/updateTankPhase', {
              productionId: this.tank.production._id,
              nextPhase: phase,
              author: 'Eduardo',
            });
          },
        },
      });
    },
  },
  computed: {
    phaseColor() {
      return Phases[this.tank.production.phase].color;
    },
    phaseLabel() {
      return Phases[this.tank.production.phase].label;
    },
    startDate() {
      const date = new Date(this.tank.production.startDate);
      return date.toLocaleDateString('en-GB');
    },
    endDate() {
      const date = new Date(this.tank.production.startDate);
      date.setDate(date.getDate() + this.tank.beer.averageTime);
      return date.toLocaleDateString('en-GB');
    },
  },
  props: {
    tank: { type: Object, required: true },
  },
};
</script>

<style>
#tank-title {
  font-weight: bold;
  font-size: 38px;
  color: rgba(0, 0, 0, 0.68);
}

#tank-description {
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  color: #747474;
  text-transform: uppercase;
}

.change-phase-btn {
  padding: 22px 22px 22px 30px !important;
}

.change-phase-btn > * {
  font-weight: bold;
  font-size: 15px;
}

.is-gapless {
  margin-bottom: 5px !important;
}

.phase-label {
  width: fit-content;
  background: #9a2195;
  border-radius: 4px;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 14px;
  color: white !important;
  padding-right: 10px;
  padding-left: 10px;
}
</style>
