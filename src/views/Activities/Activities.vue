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
  beforeMount() {
    this.$store.commit('stopLoading');
    this.$store.commit('requestActivities');
  },
};
</script>
