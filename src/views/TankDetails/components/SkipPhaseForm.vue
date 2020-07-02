<template>
  <div class="modal-card" style="width: auto;">
    <header class="modal-card-head">
      <p class="modal-card-title">AVANÇAR FASE DA PRODUÇÃO</p>
    </header>
    <section class="modal-card-body">
      <div class="columns control is-vcentered">
        <div class="column">
          <b-field label="Próxima fase">
            <b-dropdown aria-role="list" v-model="selectedPhase" :append-to-body="true">
              <button class="button" slot="trigger" slot-scope="{ active }">
                <span>{{ selectedPhase.label || 'Selecione a próxima fase' }}</span>
                <b-icon :icon="active ? 'menu-up' : 'menu-down'"></b-icon>
              </button>
              <ul v-for="(phase, index) in phases" :key="index">
                <li>
                  <b-dropdown-item aria-role="listitem" :value="phase">{{
                    phase.label
                  }}</b-dropdown-item>
                </li>
              </ul>
            </b-dropdown>
          </b-field>
        </div>
      </div>
    </section>
    <div class="modal-card-foot">
      <button class="button cancel-button" type="button" @click="$parent.close()">Cancelar</button>
      <button class="button submit-button" @click="handleSkipPhase">Adicionar</button>
    </div>
  </div>
</template>

<script>
import Phases from '@/enums/productionPhase';

export default {
  data() {
    return {
      selectedPhase: 0,
      phases: Phases,
    };
  },
  methods: {
    handleSkipPhase() {
      this.$emit('onSuccess', this.selectedPhase.type);
      this.$parent.close();
      this.$buefy.toast.open({
        message: 'Fase modificada com sucesso',
        type: 'is-success',
      });
    },
  },
};
</script>

<style>
.dropdown-menu {
  width: 100%;
}
</style>
