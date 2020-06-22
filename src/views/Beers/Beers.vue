<template>
  <main>
    <PageHeader>
      <Button text="Nova cerveja" icon="plus.svg" size="lg" />
    </PageHeader>
    <Divider title="CERVEJAS ATIVAS" />
    <CardList>
      <li v-for="(beer, index) in activeBeers" :key="index">
        <BeerCard :beer="beer" />
      </li>
    </CardList>
    <Divider title="CERVEJAS INATIVAS" />
    <CardList>
      <li v-for="(beer, index) in inactiveBeers" :key="index">
        <BeerCard :beer="beer" isInactive />
      </li>
    </CardList>
  </main>
</template>

<script>
import PageHeader from '../../components/PageHeader.vue';
import Divider from '../../components/Divider.vue';
import Button from '../../components/Button.vue';
import CardList from '../../components/CardList.vue';
import BeerCard from './components/BeerCard.vue';

export default {
  components: {
    PageHeader,
    Divider,
    Button,
    CardList,
    BeerCard,
  },
  data() {
    return {};
  },
  beforeMount() {
    this.$store.commit('startLoading');
    this.$store.commit('requestBeers');
  },
  computed: {
    activeBeers() {
      this.$store.commit('stopLoading');
      return this.$store.getters.getActiveBeers;
    },
    inactiveBeers() {
      return this.$store.getters.getInactiveBeers;
    },
  },
};
</script>
