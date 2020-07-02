<template>
  <div class="modal-card" style="width: auto;">
    <header class="modal-card-head">
      <p class="modal-card-title">REGISTRAR NOVO VALOR</p>
    </header>
    <section class="modal-card-body">
      <div class="columns control is-vcentered">
        <div class="column">
          <b-field label="Volume">
            <b-input type="text" placeholder="--" v-model="volume"></b-input>
          </b-field>
        </div>
        <div class="column">
          <b-field label="pH">
            <b-input type="text" placeholder="--" v-model="ph"></b-input>
          </b-field>
        </div>
      </div>

      <div class="columns control is-vcentered">
        <div class="column">
          <b-field label="Peso Plato">
            <b-input type="text" placeholder="--" v-model="weight"></b-input>
          </b-field>
        </div>
        <div class="column">
          <b-field label="Extrato">
            <b-input type="text" placeholder="--" v-model="extract"></b-input>
          </b-field>
        </div>
      </div>

      <div class="columns control is-vcentered">
        <div class="column is-half">
          <b-field label="Pressão">
            <b-input type="text" placeholder="--" v-model="pressure"></b-input>
          </b-field>
        </div>
      </div>
      <div class="columns control is-vcentered">
        <div class="column">
          <b-field label="Observação">
            <b-input type="text" placeholder="--" v-model="observation"></b-input>
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
export default {
  data() {
    return {
      volume: '',
      ph: '',
      weight: '',
      extract: '',
      pressure: '',
      observation: '',
    };
  },
  methods: {
    handleSkipPhase() {
      this.$emit('onSuccess', {
        volume: this.volume,
        ph: this.ph,
        weight: this.weight,
        extract: this.extract,
        pressure: this.pressure,
        observation: this.observation,
      });
      this.$parent.close();
      this.$buefy.toast.open({
        message: 'Registro adicionado com sucesso',
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
