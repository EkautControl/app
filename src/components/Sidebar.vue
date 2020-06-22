<template>
  <section>
    <b-sidebar
      :fullheight="fullheight"
      :overlay="isMobile"
      :open.sync="showSidebar"
      :can-cancel="['x']"
    >
      <div>
        <div class="images">
          <img
            src="@/assets/logo.svg"
            alt="Ekaut Control"
            class="logo"
            @click="handleRoute('Tanks')"
          />
          <img
            v-if="isTablet"
            src="@/assets/burger-white.svg"
            alt="Menu"
            class="menu"
            @click="toggleSideBar"
          />
        </div>
        <b-menu>
          <b-menu-list :activable="true">
            <b-menu-item
              label="Controle de Tanques"
              :active="handleActiveItem('Tanks') || handleActiveItem('Main')"
              @click="handleRoute('Tanks')"
            />
            <b-menu-item
              label="Histórico de Atividades"
              :active="handleActiveItem('Activities')"
              @click="handleRoute('Activities')"
            />
            <b-menu-item
              label="Informações das Cervejas"
              :active="handleActiveItem('Beers')"
              @click="handleRoute('Beers')"
            />
          </b-menu-list>
        </b-menu>
      </div>
    </b-sidebar>
  </section>
</template>

<script>
export default {
  data() {
    return {
      isMobile: window.innerWidth < 425 ?? true,
      isTablet: window.innerWidth < 1024 ?? true,
      fullheight: true,
    };
  },
  computed: {
    showSidebar() {
      return this.$store.getters.isOpen;
    },
  },
  methods: {
    toggleSideBar() {
      this.$store.commit('toggleSideBar');
    },
    handleRoute(routeName) {
      if (this.$route.name !== routeName) this.$router.push({ name: routeName }).catch(() => {});
    },
    handleActiveItem(routeName) {
      return this.$route.name === routeName;
    },
  },
};
</script>

<style>
.b-sidebar .sidebar-content.is-fullheight {
  background-color: #345087;
}

.b-sidebar .logo {
  width: 170px;
  display: block;
  margin: 50px auto;
  cursor: pointer;
}

.menu-list a.is-active {
  background-color: transparent;
  font-weight: bold;
}

.menu-list a {
  margin: 10px 50px;
  color: white;
  font-size: 16px;
  line-height: 22px;
  text-transform: uppercase;
}

.menu-list a.is-active {
  border-left: 3px #e47e00 solid;
}

.menu-list a:hover {
  background-color: transparent;
  color: white;
}

@media screen and (max-width: 1024px) {
  .b-sidebar .logo {
    width: 120px;
    margin: 40px 55px 40px 30px;
  }

  .images {
    display: flex;
    flex-direction: row;
  }
}
</style>
