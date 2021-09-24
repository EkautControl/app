<template>
  <div :class="`login-screen  ${animation ? 'beer-animation' : ''}`">
    <section class="login-card">
      <div class="logos">
        <img class="logo ekaut" src="@/assets/ekaut-logo.svg" alt="Ekaut Logo" />
        <img class="logo control" src="@/assets/logo.svg" alt="Ekaut Control logo" />
      </div>
      <b-field
        class="sign-in-form fields"
        :type="alertInvalid"
        label="Email"
        label-position="inside"
      >
        <b-input
          type="email"
          custom-class="sign-in-input"
          v-model="email"
          @focus="handleFocus"
          @blur="handleBlur"
          @keyup.enter.native="handleLogin"
        >
        </b-input>
      </b-field>
      <b-field
        class="sign-in-form fields"
        :type="alertInvalid"
        :message="invalid"
        label="Senha"
        label-position="inside"
      >
        <b-input
          type="password"
          v-model="password"
          custom-class="sign-in-input"
          @focus="handleFocus"
          @blur="handleBlur"
          @keyup.enter.native="handleLogin"
          password-reveal
        >
        </b-input>
      </b-field>
      <b-button
        v-if="!signingIn"
        class="sign-in-form button"
        @click="handleLogin"
        type="is-link"
        rounded
        >Entrar</b-button
      >
      <b-button v-if="signingIn" class="sign-in-form" type="is-link" rounded loading
        >Loading</b-button
      >
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
      animation: false,
    };
  },
  methods: {
    async handleLogin(event) {
      event.preventDefault();
      this.signingIn = true;

      try {
        this.animation = true;
        await Auth.signIn(this.email, this.password);
        this.signingIn = false;
        this.$store.dispatch('getUser', this.email);
        this.$router.push({ name: 'Main' });
      } catch (e) {
        this.signingIn = false;
        this.animation = false;
        this.alertInvalid = 'is-danger';
        this.invalid = 'Email ou senha inválidos';
      }
    },

    handleFocus(event) {
      const labelElement = event.srcElement.parentNode.previousSibling.previousSibling;
      labelElement.style.transform = 'translateY(3px)';
    },

    handleBlur(event) {
      const callerField = event.srcElement.type;

      if (!this[callerField]) {
        const labelElement = event.srcElement.parentNode.previousSibling.previousSibling;
        labelElement.style.transform = 'translateY(23px)';
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

.login-card .label {
  color: white;
}

.login-card .sign-in-form.button {
  background-color: #3396e1;
  border-radius: 12px;
  margin-top: 40px;
  margin-bottom: 40px;
}

.login-card .sign-in-form.button:hover {
  background-color: #3396e1;
}

.login-card .sign-in-input {
  box-shadow: none;
  outline: 0;
  background-color: #345087;
  border-width: 0 0 1.4px 0;
  border-radius: 0;
  color: white;
}

.login-card .sign-in-input:focus {
  border-color: white;
  box-shadow: none;
}

.login-card .logos {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
  margin-top: 30px;
}

.login-card .sign-in-form.fields {
  display: flex;
  flex-direction: column;
}
.login-card .label {
  order: -1;
  transition: all 0.2s ease-in;
  transform: translateY(23px);
  pointer-events: none;
}

@media screen and (max-width: 768px) {
  .login-card .sign-in-form {
    min-width: 150px;
    width: 20%;
    margin-bottom: 10px;
  }

  .login-card .login-screen {
    height: 90vh;
  }

  .login-card .ekaut {
    width: 10%;
    min-width: 70px;
  }

  .login-card .logo.control {
    width: 20%;
    min-width: 120px;
  }
}

@media screen and (max-width: 1024px) {
  .login-card .sign-in-form {
    min-width: 220px;
    width: 30%;
    margin-bottom: 10px;
  }

  .login-card .ekaut {
    width: 10%;
    min-width: 80px;
  }

  .login-card .logo.control {
    width: 20%;
    min-width: 150px;
  }
}

@media screen and (max-width: 4000px) {
  .login-card {
    display: flex;
    min-height: 340px;
    min-width: 300px;
    width: 35%;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    margin: auto;
    background-color: #345087;
    border-radius: 26px;
    padding-top: 10px;
    padding-bottom: 10px;
  }

  .login-card .ekaut {
    width: 10%;
    min-width: 100px;
  }

  .login-card .logo.control {
    width: 20%;
    margin-top: 10px;
    min-width: 180px;
  }

  .login-card .sign-in-form {
    min-width: 270px;
    width: 30%;
    margin-bottom: 10px;
  }
}

.beer-animation {
  background-image: url('../../assets/beer.svg');
  background-size: cover;
  background-repeat: repeat-x;
  background-position: 0 0;
  animation: animate 5s linear infinite;
}

@keyframes animate {
  0% {
    background-position: 0 700px;
  }
  25% {
    background-position: 1000px 400px;
  }
  50% {
    background-position: 2000px 100px;
  }
  75% {
    background-position: 3000px 0;
  }
  100% {
    background-position: 4000px -100px;
  }
}
</style>
