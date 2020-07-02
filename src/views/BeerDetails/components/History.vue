<template>
  <div>
    <Divider title="Histórico da cerveja" />
    <b-table
      :data="history"
      :hoverable="isHoverable"
      :loading="isLoading"
      :mobile-cards="hasMobileCards"
      :paginated="true"
      :pagination-simple="true"
      :per-page="perPage"
      :current-page.sync="currentPage"
      :scrollable="true"
      default-sort="date"
      sort-icon="arrow-up"
      sort-icon-size="is-small"
      default-sort-direction="desc"
    >
      <template slot-scope="props">
        <b-table-column field="day" label="Dia" centered sortable
          >{{ props.row.day }}
        </b-table-column>

        <b-table-column field="date" label="Data" centered sortable>
          {{ props.row.date.toLocaleDateString('en-GB') }}
        </b-table-column>

        <b-table-column field="batch" label="Lote" centered sortable>
          {{ props.row.batch }}
        </b-table-column>

        <b-table-column field="phase" label="Fase" centered sortable>
          <span class="is-type">{{ phases[props.row.phase].label }}</span>
        </b-table-column>

        <b-table-column field="activity" label="Atividade">
          {{ props.row.activity }}
        </b-table-column>

        <b-table-column field="temp" label="Temp" centered>
          {{ props.row.temp }}
        </b-table-column>

        <b-table-column field="ph" label="pH" centered>
          {{ props.row.ph }}
        </b-table-column>

        <b-table-column field="pressure" label="Pressão" centered>
          {{ props.row.pressure }}
        </b-table-column>

        <b-table-column field="vol" label="Volume" centered>
          {{ props.row.vol }}
        </b-table-column>

        <b-table-column field="extract" label="Extrato" centered>
          {{ props.row.extract }}
        </b-table-column>

        <b-table-column field="purga" label="Purga" centered>
          {{ props.row.purga }}
        </b-table-column>

        <b-table-column field="plato" label="Peso Plato" centered>
          {{ props.row.plato }}
        </b-table-column>

        <b-table-column field="reporter" label="Responsável" centered sortable>
          {{ props.row.reporter }}
        </b-table-column>
      </template>
      <template slot="empty">
        <section class="section">
          <div class="content has-text-grey has-text-centered">
            <p>
              <b-icon icon="emoticon-sad" size="is-large"></b-icon>
            </p>
            <p>Nenhum resultado encontrado</p>
          </div>
        </section>
      </template>
    </b-table>
  </div>
</template>

<script>
import Divider from '@/components/Divider.vue';
import Phases from '@/enums/productionPhase';

export default {
  components: { Divider },
  data() {
    return {
      beerId: this.$store.getters.getSelectedBeer._id,
      search: '',
      currentPage: 1,
      perPage: 15,
      isHoverable: true,
      isLoading: true,
      hasMobileCards: true,
      history: [],
      phases: Phases,
    };
  },
  computed: {
    productions() {
      return this.$store.getters.getProductions;
    },
  },
  watch: {
    productions(value) {
      this.isLoading = false;
      this.setTableDate(value);
    },
  },
  beforeMount() {
    this.$store.dispatch('getProductionsByBeerId', this.beerId);
  },
  methods: {
    setTableDate(productions) {
      productions.forEach((record) => {
        return record.data.forEach((data, index) => {
          const row = {
            day: index + 1,
            date: new Date(data.creationDate),
            batch: record.batch,
            reporter: data.reporter,
            phase: data.phase,
            activity: data.analysis ? `Análise Sensorial - ${data.analysis}` : 'Monitoramento',
            vol: this.getDataValue(data, 0),
            pressure: this.getDataValue(data, 1),
            temp: this.getDataValue(data, 2),
            ph: this.getDataValue(data, 3),
            plato: this.getDataValue(data, 4),
            extract: this.getDataValue(data, 5),
            purga: this.getDataValue(data, 6),
          };
          this.history.push(row);
        });
      });
    },
    getDataValue(data, type) {
      const result = data.data.filter((obj) => obj.type === type)[0];
      return result ? result.value : '-';
    },
  },
};
</script>
