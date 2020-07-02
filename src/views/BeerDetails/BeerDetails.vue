<template>
  <div>
    <Breadcrumbs parentPage="Informações das Cervejas" />
    <DetailsCard />
    <IdealValues />
    <History />
  </div>
</template>

<script>
import Breadcrumbs from '@/components/Breadcrumbs.vue';
import DetailsCard from './components/DetailsCard.vue';
import IdealValues from './components/IdealValues.vue';
import History from './components/History.vue';

export default {
  components: { Breadcrumbs, DetailsCard, IdealValues, History },
  data() {
    return {};
  },
  methods: {},
};
</script>
