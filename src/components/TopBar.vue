<template>
  <b-navbar
    class="top-nav"
    :mobile-burger="false"
    :transparent="true"
    :is-active="true"
    :closeOnClick="false"
    :fixed-top="true"
  >
    <template slot="end">
      <b-navbar-item class="btn-margin">
        <Button
          text="Reportar problema"
          bg-color="E47E00"
          icon="alert-white.svg"
          custom-class="problem-btn"
        />
      </b-navbar-item>
      <b-navbar-item class="menu-icon" v-if="isTablet">
        <img src="@/assets/burger.svg" alt="Menu" @click="toggleSideBar" />
      </b-navbar-item>
      <b-navbar-item>
        <img src="@/assets/notification.svg" alt="Notification" class="notification-icon" />
        <div class="notification-count">2</div>
      </b-navbar-item>
      <b-navbar-item href="#">
        <b-dropdown aria-role="list" :mobile-modal="false">
          <div class="user-initials" slot="trigger">{{ userInitials }}</div>
          <b-dropdown-item aria-role="listitem" @click="handleLogout">
            Sair
          </b-dropdown-item>
        </b-dropdown>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
import { Auth } from 'aws-amplify';
import Button from './Button.vue';

export default {
  components: {
    Button,
  },
  data() {
    return {
      isTablet: window.innerWidth < 1024,
    };
  },
  methods: {
    async handleLogout() {
      await Auth.signOut();
      this.$router.push({ name: 'Login' });
    },
    toggleSideBar() {
      this.$store.dispatch('toggleSideBar');
    },
  },
  computed: {
    userInitials() {
      return this.$store.getters.getInitials;
    },
  },
};
</script>

<style>
.top-nav {
  background-color: white;
  box-shadow: 0px 4px 5px rgba(12, 17, 60, 0.15);
  min-width: 320px;
}

.btn-margin {
  margin-right: 25px;
}

.navbar-item {
  display: flex;
  align-self: center;
}

.notification-icon {
  position: relative;
}

.notification-count {
  width: 15px;
  height: 15px;
  position: absolute;
  top: 3px;
  right: 8px;
  z-index: 999;
  border-radius: 50%;
  background-color: #e47e00;
  font-size: 10px;
  font-weight: bold;
  color: white;
  text-align: center;
}

.user-initials {
  width: 45px;
  height: 45px;
  background-color: #345087;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 18px;
  margin: auto 10px;
}

.logout-btn .dropdown-content {
  width: 60px;
}

@media screen and (max-width: 768px) {
  .btn-margin {
    margin: 0 10px;
  }

  .problem-btn .btn-icon {
    margin: 10px;
  }

  .problem-btn .text {
    display: none;
  }
}

@media screen and (max-width: 1024px) {
  .navbar-brand {
    display: none;
  }

  .menu-icon {
    left: 15px;
    position: absolute;
  }

  .navbar-end {
    display: flex;
    justify-content: flex-end;
  }

  .top-nav.dropdown-content {
    padding: 0;
  }
}
</style>
