<template>
  <div class="info-card white is-paddingless" style="overflow: hidden;">
    <b-table
      :data="production.data"
      :hoverable="isHoverable"
      :mobile-cards="hasMobileCards"
      :paginated="true"
      :pagination-simple="true"
      :per-page="perPage"
      :current-page.sync="currentPage"
    >
      <template slot-scope="props">
        <b-table-column field="type" label="Data" centered>
          <span> {{ new Date(props.row.creationDate).toLocaleDateString('en-GB') }}</span>
        </b-table-column>

        <b-table-column field="type" label="Lote" centered>
          <span>{{ production.batch }}</span>
        </b-table-column>

        <b-table-column field="type" label="Status" centered>
          <span class="is-type">{{ getPhaseLabel(props.row.phase) }}</span>
        </b-table-column>

        <b-table-column field="type" label="Atividade" centered>
          <span>Monitoramento</span>
        </b-table-column>

        <b-table-column
          v-for="(data, key) in props.row.data"
          field="type"
          :label="`${getDataLabel(data.type)}`"
          v-bind:key="key"
          centered
        >
          <span>{{ data.value }} {{ getDataSuffix(data.type) }}</span>
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
  </div>
</template>

<script>
import Phases from '@/enums/productionPhase';
import PhasesData from '@/enums/productionData';

export default {
  data() {
    return {
      filteredData: [{}],
      currentPage: 1,
      perPage: 10,
      isHoverable: true,
      isLoading: true,
      hasMobileCards: true,
    };
  },
  methods: {
    getPhaseLabel(phase) {
      console.log(phase);
      console.log(this.production);
      return Phases[phase].label;
    },
    getDataLabel(dataType) {
      return PhasesData[dataType].label;
    },
    getDataSuffix(dataType) {
      return PhasesData[dataType].suffix;
    },
  },
  props: {
    production: { type: Object, required: true },
  },
};
</script>
