<template>
  <main>
    <div>
      <Sidebar />
    </div>
    <div>
      <TopBar />
      <div class="views">
        <b-loading :is-full-page="true" :active.sync="isLoading" :can-cancel="false" />
        <router-view class="view" />
      </div>
    </div>
  </main>
</template>

<script>
import Sidebar from '../components/Sidebar.vue';
import TopBar from '../components/TopBar.vue';

export default {
  components: {
    Sidebar,
    TopBar,
  },
  mounted() {
    this.$store.dispatch('setUserInfo');
  },
  computed: {
    isLoading() {
      return this.$store.getters.isLoading;
    },
  },
};
</script>

<style>
.views {
  margin-left: 260px;
  margin-top: 10px;
}

.view {
  padding: 50px;
  margin: 0 auto;
  max-width: 1300px;
}

.view h1 .title {
  font-size: 32px;
  font-weight: bold;
  font-family: 'Open Sans', sans-serif;
}

@media screen and (max-width: 720px) {
  .view {
    padding: 50px 20px;
  }
}

@media screen and (max-width: 1023px) {
  .views {
    margin-left: 0;
    margin-top: 25px;
  }
}
</style>
