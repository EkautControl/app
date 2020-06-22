<template>
  <div class="login-screen">
    <section class="login-card">
      <div class="logos">
        <img class="logo ekaut" src="@/assets/ekaut-logo.svg"
          alt="Ekaut Logo"/>
        <img class="logo control" src="@/assets/logo.svg"
          alt="Ekaut Control logo"/>
      </div>
      <b-field class="sign-in-form" :type="alertInvalid" label="Email">
        <b-input type="email"
          v-model="email"
          maxlength="30">
        </b-input>
      </b-field>
      <b-field class="sign-in-form" :type="alertInvalid" :message="invalid" label="Senha">
        <b-input type="password"
          v-model="password"
          password-reveal>
        </b-input>
      </b-field>
      <b-button
        v-if="!signingIn"
        class="sign-in-form button"
        @click="handleLogin"
        type="is-link"
        rounded>Entrar</b-button>
      <b-button
        v-if="signingIn"
        class="sign-in-form"
        type="is-link"
        rounded
        loading>Loading</b-button>
    </section>
  </div>
</template>

<script>
import { Auth } from 'aws-amplify';

export default {
  name: 'Login',

  data() {
    return {
      email: '',
      password: '',
      signingIn: false,
      invalid: '',
      alertInvalid: '',
    };
  },

  components: {
  },

  methods: {
    async handleLogin(event) {
      event.preventDefault();
      this.signingIn = true;

      try {
        await Auth.signIn(this.email, this.password);
        this.signingIn = false;
        this.$router.push({ name: 'Main' });
      } catch (e) {
        this.signingIn = false;
        this.alertInvalid = 'is-danger';
        this.invalid = 'Email ou senha inválidos';
      }
    },
  },
};
</script>

<style>
.login-screen {
  display: flex;
  height: 100vh;
  align-items: center;
}

.login-card {
  display: flex;
  min-height: 400px;
  min-width: 400px;
  max-width: 70%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  background-color: #345087;
  border-radius: 26px;
}

.sign-in-form {
  min-width: 250px;
  width: 30%;
}

.label {
  color: white;
}

.sign-in-form.button {
  background-color: #3396E1;
  border-radius: 12px;
}

.logos {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 10px;
}

.ekaut {
  max-width: 30%;
  min-width: 100px;
}
</style>
