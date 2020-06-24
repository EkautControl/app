<template>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">Adicionar nova cerveja</p>
    </header>
    <section class="modal-card-body">
      <div class="columns">
        <div class="column is-half">
          <b-field label="Nome da cerveja">
            <b-input
              type="text"
              placeholder="Insira o nome da cerveja"
              v-model="beerName"
              maxlength="13"
              required
            ></b-input>
          </b-field>
        </div>

        <div class="column is-half">
          <b-field label="Tipo de cerveja">
            <b-dropdown aria-role="list" v-model="beerType" :append-to-body="true">
              <button class="button" slot="trigger" slot-scope="{ active }">
                <span>{{ beerType.label || '--' }}</span>
                <b-icon :icon="active ? 'menu-up' : 'menu-down'"></b-icon>
              </button>
              <ul v-for="beerType in beerTypes" :key="beerType.type">
                <li>
                  <b-dropdown-item aria-role="listitem" :value="beerType">{{
                    beerType.label
                  }}</b-dropdown-item>
                </li>
              </ul>
            </b-dropdown>
          </b-field>
        </div>
      </div>
      <div class="columns">
        <div class="column is-half">
          <b-field label="Cervejaria">
            <b-input
              type="text"
              placeholder="Insira a cervejaria"
              v-model="brewery"
              required
            ></b-input>
          </b-field>
        </div>

        <div class="column is-half">
          <b-field label="Tempo médio de produção (dias)">
            <b-input type="number" placeholder="--" v-model="averageTime"></b-input>
          </b-field>
        </div>
      </div>
    </section>
    <div class="modal-card-foot">
      <button class="button cancel-button" type="button" @click="$parent.close()">Cancelar</button>
      <button class="button submit-button" type="submit" @click="addNewBeer">Adicionar</button>
    </div>
  </div>
</template>

<script>
import BeerTypes from '@/enums/beerType';

export default {
  data() {
    return {
      beerName: '',
      beerType: '',
      brewery: '',
      averageTime: 0,
      beerTypes: BeerTypes,
    };
  },
  computed: {},
  methods: {
    async addNewBeer() {
      try {
        await this.$store.commit('addNewBeer', {
          beerName: this.beerName,
          beerType: this.beerType.type,
          brewery: this.brewery,
          averageTime: this.averageTime,
        });
        this.$parent.close();
        this.$buefy.toast.open({
          message: 'Nova cerveja adicionada!',
          type: 'is-success',
        });
        this.$store.commit('startLoading');
      } catch (err) {
        this.$parent.close();
        this.$buefy.toast.open({
          message: 'Problemas ao adicionar! Tente novamente.',
          type: 'is-danger',
        });
      }
    },
  },
};
</script>

<style>
.beer-form .modal-card-head {
  background-color: white;
  padding: 50px 40px 0;
}

.beer-form .modal-card-foot {
  background-color: white;
  padding: 0px 40px 30px;
  justify-content: flex-end;
}

.beer-form .modal-card-body {
  padding: 40px;
}

.beer-form .modal-card-title {
  color: #475198;
  text-transform: uppercase;
  font-weight: bold;
  text-align: left;
  font-size: 20px;
}

.beer-form .modal-card-head,
.beer-form .modal-card-foot {
  border: none;
}
</style>
