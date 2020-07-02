<template>
  <main class="wrapper" v-if="isLoaded">
    <Breadcrumbs parentPage="Controle dos Tanques" />
    <div class="tile is-vertical is-ancestor">
      <div class="tile">
        <div class="tile is-parent is-8">
          <Overview :tank="details" />
        </div>
        <div class="tile is-parent is-4">
          <ProductionInfo :production="details.production" />
        </div>
      </div>

      <div class="tile">
        <div class="tile is-parent is-6">
          <Registry :production="details.production" />
        </div>
        <div class="tile is-parent is-vertical is-6">
          <div class="tile is-child">
            <Monitor />
          </div>
          <div class="tile is-child">
            <ProductionAnalysis :production="details.production" />
          </div>
        </div>
      </div>

      <div class="tile is-parent">
        <Activity :production="details.production" />
      </div>
    </div>
  </main>
</template>

<script>
import { mapState } from 'vuex';
import Breadcrumbs from '@/components/Breadcrumbs.vue';
import Registry from './components/Registry.vue';
import Overview from './components/Overview.vue';
import ProductionInfo from './components/ProductionInfo.vue';
import Monitor from './components/Monitor.vue';
import ProductionAnalysis from './components/ProductionAnalysis.vue';
import Activity from './components/Activity.vue';

export default {
  components: {
    Registry,
    Overview,
    ProductionInfo,
    Monitor,
    ProductionAnalysis,
    Activity,
    Breadcrumbs,
  },
  beforeMount() {
    this.$store.commit('stopLoading');
    this.$store.dispatch('tank/isLoaded', false);
    this.$store.dispatch('tank/requestTankDetails', this.$route.params.id);
  },
  computed: mapState('tank', ['details', 'isLoaded']),
};
</script>

<style>
.wrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding: 15px 16px;
}

.info-card {
  width: 100%;
  height: 100%;
  padding: 25px 35px;
  background-color: #e4e5ec;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
}

.info-card.white {
  background: #ffffff;
}

.info-card .card-title {
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  color: #7b7b7b;
}

.info-card .card-description {
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  color: #7b7b7b;
}

.info-card .info-title {
  font-weight: 600;
  font-size: 10px;
  color: rgba(128, 128, 128, 0.68);
}

.info-card .info {
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  color: #747474;
  padding-top: 3px;
}

.info-box {
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(168, 168, 168, 0.25);
  border-radius: 15px;
  padding: 10px 16px;
}

.info-box label {
  font-weight: normal;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.5);
  text-transform: uppercase;
}

.info-box .value {
  font-weight: bold;
  font-size: 36px;
  line-height: 35px;
  color: #5a5a5a;
}

.info-box .icon {
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 15px;
  height: 50px;
  width: 50px;
}

.info-box .observation {
  font-weight: bold;
  font-size: 10px;
  margin-top: 10px;
  color: rgba(0, 0, 0, 0.5);
}

.info-box ins.observation {
  font-weight: normal;
  font-size: 10px;
  color: rgba(0, 0, 0, 0.5);
}

@media screen and (max-width: 1023px) {
  .info-card {
    padding: 15px 20px;
  }
}
</style>
