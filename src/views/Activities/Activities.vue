<template>
  <div>
    <PageHeader />
    <Table />
  </div>
</template>

<script>
import PageHeader from '@/components/PageHeader.vue';
import Table from './components/Table.vue';

export default {
  components: {
    PageHeader,
    Table,
  },
  methods: {
    async getData() {
      const activitiesRequest = await this.$http.get('/activities');
      const activities = activitiesRequest.data;
      this.$store.commit('setActivities', activities);
    },
  },
  mounted() {
    this.getData();
  },
};
</script>
