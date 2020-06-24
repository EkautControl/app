<template>
  <div class="login-screen">
    <section class="login-card">
      <div class="logos">
        <img class="logo ekaut" src="@/assets/ekaut-logo.svg"
          alt="Ekaut Logo"/>
        <img class="logo control" src="@/assets/logo.svg"
          alt="Ekaut Control logo"/>
      </div>
      <b-field
        class="sign-in-form fields"
        :type="alertInvalid"
        label="Email"
        label-position="inside">
        <b-input type="email"
          custom-class="sign-in-input"
          v-model="email"
          @focus="handleFocus"
          @blur="handleBlur"
          @keyup.enter.native="handleLogin">
        </b-input>
      </b-field>
      <b-field
        class="sign-in-form fields"
        :type="alertInvalid"
        :message="invalid"
        label="Senha"
        label-position="inside">
        <b-input type="password"
          v-model="password"
          custom-class="sign-in-input"
          @focus="handleFocus"
          @blur="handleBlur"
          @keyup.enter.native="handleLogin"
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

.label {
  color: white;
}

.sign-in-form.button {
  background-color: #3396E1;
  border-radius: 12px;
  margin-bottom: 40px;
}

.sign-in-form.button:hover {
  background-color: #3396E1;
}

.sign-in-input {
  box-shadow: none;
  outline: 0;
  background-color: #345087;
  border-width: 0 0 1.4px 0;
  border-radius: 0;
  color: white;
}

.sign-in-input:focus {
  border-color: white;
  box-shadow: none;
}

.logos {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  margin-top: 30px;
}

.sign-in-form.fields {
  /* padding-top: 10px; */
  display: flex;
  flex-direction: column;
}
.label {
  order: -1;
  transition: all 0.2s ease-in;
  transform: translateY(23px);
  pointer-events: none;
}

@media screen and (max-width: 768px) {
  .sign-in-form {
  min-width: 150px;
  width: 20%;
  margin-bottom: 10px;
  }

  .login-screen {
    height: 90vh;
  }

  .ekaut {
    width: 10%;
    min-width: 70px;
  }

  .logo.control {
    width: 20%;
    min-width: 120px;
  }
}

@media screen and (max-width: 1024px) {
  .sign-in-form {
    min-width: 220px;
    width: 30%;
    margin-bottom: 10px;
  }

  .ekaut {
    width: 10%;
    min-width: 80px;
  }

  .logo.control {
    width: 20%;
    min-width: 150px;
  }
}

@media screen and (max-width: 1440px) {
  .login-card {
  display: flex;
  min-height: 340px;
  min-width: 300px;
  height: 70vh;
  width: 35%;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: auto;
  background-color: #345087;
  border-radius: 26px;
  padding-top: 10px;
  padding-bottom: 10px;
  }

  .ekaut {
    width: 10%;
    min-width: 100px;
  }

  .logo.control {
    width: 20%;
    min-width: 180px;
  }

  .sign-in-form {
    min-width: 270px;
    width: 30%;
    margin-bottom: 10px;
  }
}
</style>
