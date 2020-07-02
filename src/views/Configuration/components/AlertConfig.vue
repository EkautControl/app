<template>
  <section>
    <b-field label="Como você gostaria de ser notificado?" class="alert-field">
      <div class="field">
        <b-radio v-model="radio" size="is-small" native-value="sms">
          SMS
        </b-radio>
      </div>
      <div class="field">
        <b-radio v-model="radio" size="is-small" native-value="email">
          Email
        </b-radio>
      </div>
      <div class="field">
        <b-radio v-model="radio" size="is-small" native-value="phoneCall">
          Ligação
        </b-radio>
      </div>
    </b-field>
  </section>
</template>

<script>
export default {
  data() {
    return {
      radio: '',
    };
  },
};
</script>

<style scoped>
.alert-field {
  display: flex;
  flex-direction: column;
}

.b-radio.radio input[type='radio'] + .check:before {
  background-color: #5e5d5d;
}
.b-radio.radio:hover input[type='radio']:not(:disabled) + .check {
  border-color: #5e5d5d;
}
</style>
