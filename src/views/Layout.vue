<template>
  <main>
    <div>
      <Sidebar/>
    </div>
    <div>
      <TopBar/>
      <router-view class="view"/>
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
};
</script>

<style scoped>
.view {
  background-color: #E5E5E5;
  margin-left: 260px;
  margin-top: 10px;
  min-height: 92vh;
}

@media screen and (max-width: 1023px) {
  .view { margin-left: 0; }
}
</style>
