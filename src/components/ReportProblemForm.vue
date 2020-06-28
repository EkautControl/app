<template>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">Reportar problema</p>
    </header>
    <section class="modal-card-body">
      <div class="columns">
        <div class="column">
          <b-field label="Título">
            <b-input
              type="text"
              placeholder="Digite o título do problema"
              v-model="title"
              required
            ></b-input>
          </b-field>
        </div>
        <div class="column">
          <b-field label="Data">
            <b-datepicker
              icon="calendar-today"
              trap-focus
              :append-to-body="true"
              :max-date="new Date()"
              v-model="selectedDate"
            />
          </b-field>
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <b-field label="Observação">
            <b-input
              type="textarea"
              placeholder="Breve descrição do problema"
              v-model="description"
              maxlength="240"
              required
            ></b-input>
          </b-field>
        </div>
      </div>
    </section>
    <div class="modal-card-foot">
      <button class="button cancel-button" type="button" @click="$parent.close()">Cancelar</button>
      <button class="button submit-button" type="submit" @click="addNewProblem">Confirmar</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      description: '',
      reporter: this.$store.getters.getUserName || 'Eduardo Lima',
      selectedDate: new Date(),
    };
  },
  methods: {
    async addNewProblem() {
      try {
        await this.$store.dispatch('addNewActivity', {
          title: this.title,
          description: this.description,
          reporter: this.reporter,
          date: this.selectedDate,
        });
        this.$parent.close();
        this.$buefy.toast.open({
          message: 'Problema reportado com sucesso!',
          type: 'is-success',
        });
      } catch (err) {
        this.$parent.close();
        this.$buefy.toast.open({
          message: 'Problemas ao reportar! Tente novamente.',
          type: 'is-danger',
        });
      }
    },
  },
};
</script>

<style>
.problem-form .modal-card-head {
  background-color: white;
  padding: 50px 40px 0;
}

.problem-form .modal-card-foot {
  background-color: white;
  padding: 0px 40px 30px;
  justify-content: flex-end;
}

.problem-form .modal-card-body {
  padding: 40px;
}

.problem-form .modal-card-title {
  color: #475198;
  text-transform: uppercase;
  font-weight: bold;
  text-align: left;
  font-size: 20px;
}

.problem-form .modal-card-head,
.problem-form .modal-card-foot {
  border: none;
}
</style>
