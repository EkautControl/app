<template>
  <main>
    <PageHeader></PageHeader>
    <Divider title="EDITAR PERFIL"></Divider>
    <EditUserForm :userData="userData"></EditUserForm>
    <Divider title="CONFIGURAÇÃO DE ALERTAS"></Divider>
    <AlertConfig></AlertConfig>
    <Button text="SALVAR ALTERAÇÕES" bgColor="345087" />
  </main>
</template>

<script>
import Divider from '../../components/Divider.vue';
import PageHeader from '../../components/PageHeader.vue';
import EditUserForm from './components/EditUserForm.vue';
import AlertConfig from './components/AlertConfig.vue';
import Button from '../../components/Button.vue';

export default {
  data() {
    return {
      userData: {
        name: 'Antonio Almeida',
        email: 'almeida.ab97@gmail.com',
        phone: '(81)99581-6186',
      },
    };
  },
  components: {
    Divider,
    PageHeader,
    EditUserForm,
    AlertConfig,
    Button,
  },
};
</script>
