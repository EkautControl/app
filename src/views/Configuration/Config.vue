<template>
  <main>
    <PageHeader></PageHeader>
    <Divider title="EDITAR PERFIL"></Divider>
    <section class="user-form">
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
          v-model="notificationEmail"
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
    </section>
    <!-- <Divider title="CONFIGURAÇÃO DE ALERTAS"></Divider> -->
    <section class="alert-radio">
      <b-field label="Como você gostaria de ser notificado?" class="alert-field">
        <div class="field">
          <b-radio v-model="notificationType" size="is-small" native-value="SMS">
            SMS
          </b-radio>
        </div>
        <div class="field">
          <b-radio v-model="notificationType" size="is-small" native-value="email">
            Email
          </b-radio>
        </div>
      </b-field>
    </section>
    <Button text="SALVAR ALTERAÇÕES" bgColor="345087" :handleClick="handleSave" />
  </main>
</template>

<script>
import Divider from '../../components/Divider.vue';
import PageHeader from '../../components/PageHeader.vue';
import Button from '../../components/Button.vue';

export default {
  data() {
    return {
      userName: '',
      userEmail: '',
      notificationEmail: '',
      userPhone: '',
      subscriptionArn: '',
      notificationType: '',
    };
  },
  components: {
    Divider,
    PageHeader,
    Button,
  },
  beforeMount() {
    const userData = this.$store.getters.getUserData;
    this.userName = userData.name;
    this.userEmail = userData.email;
    this.notificationEmail = userData.notificationEmail;
    this.userPhone = userData.phone;
    this.subscriptionArn = userData.subscriptionArn;
  },
  methods: {
    handleSave() {
      const newUserData = {
        name: this.userName,
        phone: this.userPhone,
        notificationType: this.notificationType,
        notificationEmail: this.notificationEmail,
        subscriptionArn: this.subscriptionArn,
        email: this.userEmail,
      };
      this.$store.dispatch('updateUser', newUserData);
    },
  },
};
</script>

<style scoped>
.alert-field {
  display: flex;
  flex-direction: column;
}

.alert-radio {
  margin-bottom: 30px;
}

.user-form {
  max-width: 500px;
}
</style>
