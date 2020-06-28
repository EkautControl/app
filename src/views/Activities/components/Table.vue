<template>
  <section>
    <b-field>
      <b-input
        placeholder="Pesquisar"
        type="search"
        v-model="search"
        icon="magnify"
        custom-class="search-table"
        @input="filterData"
      ></b-input>
    </b-field>
    <b-table
      :data="filteredData"
      :hoverable="isHoverable"
      :loading="isLoading"
      :mobile-cards="hasMobileCards"
      :paginated="true"
      :pagination-simple="true"
      :per-page="perPage"
      :current-page.sync="currentPage"
      detailed
      :show-detail-icon="true"
      detail-key="id"
    >
      <template slot-scope="props">
        <b-table-column field="type" label="Categoria" centered>
          <span class="is-type">{{ props.row.type }}</span>
        </b-table-column>

        <b-table-column field="title" label="Título">
          {{ props.row.title }}
        </b-table-column>

        <b-table-column field="creationDate" label="Data" centered>
          {{ props.row.creationDate }}
        </b-table-column>

        <b-table-column field="reporter" label="Responsável" centered>
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
      <template slot="detail" slot-scope="props">
        <p>{{ props.row.description }}</p>
      </template>
    </b-table>
  </section>
</template>

<script>
export default {
  data() {
    return {
      search: '',
      filteredData: [],
      currentPage: 1,
      perPage: 10,
      isHoverable: true,
      isLoading: true,
      hasMobileCards: true,
    };
  },
  methods: {
    filterData() {
      this.filteredData = this.activities.filter((res) => {
        return Object.keys(res).some((key) =>
          res[key].toLowerCase().includes(this.search.toLowerCase())
        );
      });
    },
  },
  computed: {
    activities() {
      return this.$store.getters.getActivities;
    },
  },
  watch: {
    activities(newValue) {
      this.isLoading = false;
      this.filteredData = newValue;
    },
  },
};
</script>

<style>
.table {
  background-color: transparent;
  font-size: 14px;
}

.table td {
  background-color: white;
}

.table thead {
  background-color: #345087;
}

.b-table .th-wrap {
  color: white;
}

.is-type {
  display: inline-flex;
  background-color: #8d95b9;
  padding: 0.3em 0.8em;
  width: 90px;
  font-size: 0.7rem;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  color: white;
  text-transform: uppercase;
}

.search-table {
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
}

.control.has-icons-left .input {
  padding-left: 3.25em;
}

.control.has-icons-left .icon.is-left {
  left: 10px;
}
</style>
