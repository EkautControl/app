<template>
  <b-table
    :data="history"
    :hoverable="isHoverable"
    :mobile-cards="hasMobileCards"
    :paginated="true"
    :pagination-simple="true"
    :per-page="perPage"
    :current-page.sync="currentPage"
  >
    <template slot-scope="props">
      <b-table-column field="day" label="Dia" centered>
        <span>{{ props.row.day }}</span>
      </b-table-column>

      <b-table-column field="date" label="Data" centered>
        <span> {{ props.row.date.toLocaleDateString('en-GB') }}</span>
      </b-table-column>

      <b-table-column field="batch" label="Lote" centered>
        <span>{{ props.row.batch }}</span>
      </b-table-column>

      <b-table-column field="phase" label="Status" centered>
        <span class="is-type">{{ getPhaseLabel(props.row.phase) }}</span>
      </b-table-column>

      <b-table-column field="activity" label="Atividade" centered>
        <span>{{ props.row.activity }}</span>
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

      <b-table-column field="type" label="Responsável" centered>
        <span>{{ props.row.reporter }}</span>
      </b-table-column>
    </template>
    <template slot="empty">
      <section class="section">
        <div class="content has-text-grey has-text-centered">
          <p>
            <b-icon icon="emoticon-sad" size="is-large"></b-icon>
          </p>
          <p>Nenhum registro de atividade</p>
        </div>
      </section>
    </template>
  </b-table>
</template>

<script>
import Phases from '@/enums/productionPhase';
import PhasesData from '@/enums/productionData';

export default {
  data() {
    return {
      production: this.$store.getters['tank/getProduction'],
      filteredData: [{}],
      currentPage: 1,
      perPage: 10,
      isHoverable: true,
      isLoading: true,
      hasMobileCards: true,
      history: [],
    };
  },
  beforeMount() {
    this.setTableData();
  },
  methods: {
    getDataValue(data, type) {
      const result = data.data.filter((obj) => obj.type === type)[0];
      return result ? result.value : '-';
    },
    getPhaseLabel(phase) {
      return Phases[phase].label;
    },
    getDataLabel(dataType) {
      return PhasesData[dataType].label;
    },
    getDataSuffix(dataType) {
      return PhasesData[dataType].suffix;
    },
    setTableData() {
      this.production.data.forEach((data, index) => {
        const record = {
          day: index + 1,
          batch: this.production.batch,
          date: new Date(data.creationDate),
          phase: data.phase,
          reporter: data.reporter,
          activity: data.analysis ? 'Análise Sensorial' : 'Monitoramento',
          vol: this.getDataValue(data, 0),
          pressure: this.getDataValue(data, 1),
          temp: this.getDataValue(data, 2),
          ph: this.getDataValue(data, 3),
          plato: this.getDataValue(data, 4),
          extract: this.getDataValue(data, 5),
          purga: this.getDataValue(data, 6),
        };
        this.history.push(record);
      });
    },
  },
};
</script>
