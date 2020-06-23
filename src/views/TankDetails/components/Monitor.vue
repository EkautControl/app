<template>
  <div class="info-card">
    <div class="columns">
      <div class="column is-two-thirds level-left">
        <p class="card-title">Monitoramento</p>
        <p class="card-description">Atualizado 11/06/2020 às 16:49 automaticamente</p>
      </div>
      <div class="column">
        <div class="level level-right">
          <Button text="ALTERAR" bg-color="9B0021" icon="alert-white.svg"></Button>
        </div>
      </div>
    </div>

    <div class="columns is-vcentered">
      <div class="column">
        <div class="info-box is-relative">
          <label>TEMPERATURA</label>
          <div class="value">19°C</div>
          <img
            class="icon level-right"
            src="@/assets/thermometer2.svg"
            style="
              filter: invert(92%) sepia(0%) saturate(116%) hue-rotate(214deg) brightness(94%)
                contrast(77%);
            "
          />
        </div>
      </div>
      <div class="column">
        <p class="observation"><ins>11/06/2020 às 16:26</ins> 18.3ºC</p>
        <div class="horizontal-divider" style="margin: 7px 0;" />
        <p class="observation"><ins>11/06/2020 às 16:26</ins> 18.3ºC</p>
      </div>
    </div>
  </div>
</template>

<script>
import Button from '@/components/Button.vue';

export default {
  components: {
    Button,
  },
};
</script>
