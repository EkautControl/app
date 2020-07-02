<template>
  <div class="info-card white">
    <p class="card-title">Análise da produção</p>
    <p class="card-description">Comparação da temperatura, pH e extrato ao longo da produção</p>
    <v-chart :options="options" autoresize />
  </div>
</template>

<script>
import ECharts from 'vue-echarts';
import 'echarts/lib/chart/line';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/timeline';

export default {
  components: {
    'v-chart': ECharts,
  },
  data() {
    const phases = this.production.data;

    let temp = [];
    let extr = [];
    let ph = [];

    phases.forEach((phase, key) => {
      phase.data.forEach((data) => {
        // eslint-disable-next-line default-case
        switch (data.type) {
          // Temperatura
          case 2:
            temp = [...temp, [key, data.value]];
            break;
          // pH
          case 3:
            ph = [...ph, [key, data.value]];
            break;
          // Extrato
          case 5:
            extr = [...extr, [key, data.value]];
            break;
        }
      });
    });

    console.log(temp);
    return {
      options: {
        title: { text: 'ECharts Sample' },
        legend: { data: ['Temperatura', 'Extrato', 'pH'], bottom: 0, left: 0 },
        xAxis: {
          minInterval: 1,
        },
        yAxis: {},
        series: [
          {
            coordinateSystem: 'cartesian2d',
            name: 'Temperatura',
            type: 'line',
            symbol: 'diamond',
            symbolSize: 13,
            itemStyle: {
              color: '#27AE60',
              borderWidth: 3,
            },
            data: temp,
          },
          {
            coordinateSystem: 'cartesian2d',
            name: 'Extrato',
            type: 'line',
            symbol: 'circle',
            symbolSize: 11,
            itemStyle: {
              color: '#9B0021',
              borderWidth: 3,
            },
            data: extr,
          },
          {
            coordinateSystem: 'cartesian2d',
            name: 'pH',
            type: 'line',
            symbol: 'triangle',
            symbolSize: 13,
            itemStyle: {
              color: '#354599',
              borderWidth: 3,
            },
            data: ph,
          },
        ],
        animationDuration: 2000,
      },
    };
  },
  props: {
    production: { type: Object, required: true },
  },
};
</script>

<style>
.echarts {
  width: 100%;
}
</style>
