<template>
  <main>
    <PageHeader>
      <Button text="Nova produção" icon="plus.svg" size="lg" :handleClick="openForm" />
    </PageHeader>
    <Divider title="TANQUES EM ALERTA" />
    <CardList :empty="tanksInAlert.length === 0">
      <li v-for="tank in tanksInAlert" :key="tank._id">
        <TankCard :tank="tank" hasProblem />
      </li>
    </CardList>
    <Divider title="TANQUES EM USO" />
    <CardList :empty="activeTanks.length === 0">
      <li v-for="tank in activeTanks" :key="tank._id">
        <TankCard :tank="tank" />
      </li>
    </CardList>
  </main>
</template>

<script>
import PageHeader from '../../components/PageHeader.vue';
import Divider from '../../components/Divider.vue';
import Button from '../../components/Button.vue';
import CardList from '../../components/CardList.vue';
import TankCard from './components/TankCard.vue';
import NewProductionForm from './components/NewProductionForm.vue';

export default {
  components: {
    PageHeader,
    Divider,
    Button,
    CardList,
    TankCard,
  },
  methods: {
    openForm() {
      this.$buefy.modal.open({
        parent: this,
        component: NewProductionForm,
        hasModalCard: true,
        customClass: 'submission-form',
        trapFocus: true,
        canCancel: ['escape', 'outside'],
        scroll: 'keep',
      });
    },
  },
  mounted() {
    this.$store.dispatch('startLoading');
    this.$store.dispatch('requestActiveTanks');
  },
  computed: {
    activeTanks() {
      this.$store.dispatch('stopLoading');
      return this.$store.getters.getActiveTanks;
    },
    tanksInAlert() {
      return this.$store.getters.getTanksInAlert;
    },
  },
};
</script>
