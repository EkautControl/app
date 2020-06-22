<template>
  <main>
    <PageHeader>
      <Button text="Nova produção" icon="plus.svg" size="lg" />
    </PageHeader>
    <Divider title="TANQUES EM ALERTA" />
    <CardList>
      <li v-for="(tank, index) in tanksInAlert" :key="index">
        <TankCard :tank="tank" hasProblem />
      </li>
    </CardList>
    <Divider title="TANQUES EM USO" />
    <CardList>
      <li v-for="(tank, index) in activeTanks" :key="index">
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

export default {
  components: {
    PageHeader,
    Divider,
    Button,
    CardList,
    TankCard,
  },
  methods: {
    },
  },
  beforeMount() {
    this.$store.commit('startLoading');
    this.$store.commit('requestActiveTanks');
  },
  computed: {
    activeTanks() {
      this.$store.commit('stopLoading');
      return this.$store.getters.getActiveTanks;
    },
    tanksInAlert() {
      return this.$store.getters.getTanksInAlert;
    },
  },
};
</script>
