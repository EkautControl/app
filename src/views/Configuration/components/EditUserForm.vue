<template>
  <main>
    <b-field label="Nome">
      <b-input
        type="text"
        placeholder="Nome do usuário"
        v-model="userName"
        maxlength="35"
      ></b-input>
    </b-field>
    <b-field label="Email">
      <b-input
        type="text"
        placeholder="Email do usuário"
        v-model="userEmail"
        maxlength="35"
      ></b-input>
    </b-field>
    <b-field label="Telefone">
      <b-input
        type="text"
        placeholder="Telefone do usuário"
        v-model="userPhone"
        maxlength="14"
      ></b-input>
    </b-field>
  </main>
</template>

<script>
export default {
  props: {
    userData: { type: Object },
  },
  data() {
    return {
      userName: this.userData.name,
      userEmail: this.userData.email,
      userPhone: this.userData.phone,
    };
  },
};
</script>
