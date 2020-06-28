<template>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">Adicionar nova produção</p>
    </header>
    <section class="modal-card-body">
      <div class="columns">
        <div class="column is-half">
          <b-field label="Cerveja">
            <b-dropdown
              aria-role="list"
              v-model="selectedBeer"
              :append-to-body="true"
              scrollable
              max-height="150"
            >
              <button class="button" slot="trigger" slot-scope="{ active }">
                <span>{{ selectedBeer.name || 'Selecione a cerveja' }}</span>
                <b-icon :icon="active ? 'menu-up' : 'menu-down'"></b-icon>
              </button>
              <ul v-for="(beer, index) in beers" :key="index">
                <li>
                  <b-dropdown-item aria-role="listitem" :value="beer">
                    {{ beer.name }}
                  </b-dropdown-item>
                </li>
              </ul>
            </b-dropdown>
          </b-field>
        </div>

        <div class="column is-half">
          <div class="columns">
            <div class="column">
              <b-field label="Lote">
                <b-input type="number" placeholder="--" v-model="batch"></b-input>
              </b-field>
            </div>
            <div class="column">
              <b-field label="Tanque">
                <b-dropdown
                  aria-role="list"
                  v-model="selectedTank"
                  :append-to-body="true"
                  scrollable
                  max-height="150"
                >
                  <button class="button" slot="trigger" slot-scope="{ active }">
                    <span>{{ selectedTank.tank || '--' }}</span>
                    <b-icon :icon="active ? 'menu-up' : 'menu-down'"></b-icon>
                  </button>
                  <ul v-for="tank in tanks" :key="tank._id">
                    <li>
                      <b-dropdown-item aria-role="listitem" :value="tank">
                        {{ tank.tank }}
                      </b-dropdown-item>
                    </li>
                  </ul>
                </b-dropdown>
              </b-field>
            </div>
          </div>
        </div>
      </div>

      <div class="columns">
        <div class="column is-half">
          <b-field label="Fase">
            <b-dropdown aria-role="list" v-model="selectedPhase" :append-to-body="true">
              <button class="button" slot="trigger" slot-scope="{ active }">
                <span>{{ selectedPhase.label || '--' }}</span>
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
        <div class="column is-half">
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
        <div class="column is-third">
          <b-field label="Fermento">
            <b-input
              type="text"
              placeholder="Insira o fermento"
              v-model="ferment"
              required
            ></b-input>
          </b-field>
        </div>
        <div class="column is-third">
          <b-field label="Levedura">
            <b-input
              type="text"
              placeholder="Insira o tipo de levedura"
              v-model="leaven"
              required
            ></b-input>
          </b-field>
        </div>
        <div class="column is-third">
          <b-field label="Geração">
            <b-input
              type="text"
              placeholder="Insira a geração"
              v-model="generation"
              required
            ></b-input>
          </b-field>
        </div>
      </div>
    </section>
    <div class="modal-card-foot">
      <button class="button cancel-button" type="button" @click="$parent.close()">Cancelar</button>
      <button class="button submit-button" @click="addNewProduction">Adicionar</button>
    </div>
  </div>
</template>

<script>
import Phases from '@/enums/productionPhase';

export default {
  data() {
    return {
      selectedBeer: '',
      selectedTank: 0,
      selectedPhase: 0,
      selectedDate: new Date(),
      batch: 0,
      phases: Phases,
      ferment: '',
      leaven: '',
      generation: '',
    };
  },
  computed: {
    beers() {
      this.$store.dispatch('stopLoading');
      return this.$store.getters.getBeers;
    },
    tanks() {
      return this.$store.getters.getInactiveTanks;
    },
  },
  methods: {
    addNewProduction() {
      try {
        this.$store.dispatch('addProductionToTank', {
          tank: this.selectedTank.tank,
          beerId: this.selectedBeer._id,
          batch: this.batch,
          phase: this.selectedPhase.type,
          date: this.selectedDate,
          ferment: this.ferment,
          leaven: this.leaven,
          generation: this.generation,
          reporter: this.$store.getters.getUserName,
        });
        this.$parent.close();
        this.$buefy.toast.open({
          message: 'Nova produção adicionada!',
          type: 'is-success',
        });
      } catch (err) {
        this.$parent.close();
        this.$buefy.toast.open({
          message: 'Problemas ao adicionar! Tente novamente.',
          type: 'is-danger',
        });
      }
    },
  },
  mounted() {
    this.$store.dispatch('startLoading');
    this.$store.dispatch('requestBeers');
    this.$store.dispatch('requestInactiveTanks');
  },
};
</script>
