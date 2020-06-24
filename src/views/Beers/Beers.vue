<template>
  <main>
    <PageHeader>
      <Button text="Nova cerveja" icon="plus.svg" size="lg" :handleClick="openForm" />
    </PageHeader>
    <Divider title="CERVEJAS ATIVAS" />
    <CardList>
      <li v-for="beer in activeBeers" :key="beer._id">
        <BeerCard :beer="beer" />
      </li>
    </CardList>
    <Divider title="CERVEJAS INATIVAS" />
    <CardList>
      <li v-for="beer in inactiveBeers" :key="beer._id">
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
import NewBeerForm from './components/NewBeerForm.vue';

export default {
  components: {
    PageHeader,
    Divider,
    Button,
    CardList,
    BeerCard,
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
      this.$store.commit('stopLoading');
      return this.$store.getters.getInactiveBeers;
    },
  },
  methods: {
    openForm() {
      this.$buefy.modal.open({
        parent: this,
        component: NewBeerForm,
        hasModalCard: true,
        customClass: 'submission-form',
        trapFocus: true,
        canCancel: ['escape', 'outside'],
        scroll: 'keep',
      });
    },
  },
};
</script>
