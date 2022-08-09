<template>
  <div class="navbar">
    <div @click="$router.push('/')" style="color: white">
      <h3>Травокософф</h3>
    </div>
    <div class="navbar_button">
      <!-- <ps-nav-bar-button @click="$router.push('/products')">
        Каталог товаров</ps-nav-bar-button
      > -->
      <ps-nav-bar-button v-if="isAuth" @click="$router.push('/category')">
        Категории товаров
      </ps-nav-bar-button
      >
      <ps-nav-bar-button v-if="isAuth" @click="$router.push('/brand')">
        Производители товаров
      </ps-nav-bar-button
      >
      <ps-nav-bar-button v-if="isAuth" @click="$router.push('/user')"
      >Пользователи
      </ps-nav-bar-button
      >
      <ps-nav-bar-button @click="$router.push('/contacts')"
      >Контакты
      </ps-nav-bar-button
      >

      <ps-nav-bar-button @click="logout" v-if="isAuth"
      >
        <ps-icon :name="'logout'" style="color: white"/>
      </ps-nav-bar-button
      >
      <ps-nav-bar-button @click="$router.push('/login')" v-if="!isAuth"
      >
        <ps-icon :name="'login'" style="color: white"/>
      </ps-nav-bar-button>
    </div>
  </div>
</template>

<script>
import PsNavBarButton from "./UI/PsNavBarButton.vue";
import PsIcon from "@/components/UI/PsIcon";
import {mapActions, mapState} from "vuex";

export default {
  components: {PsIcon, PsNavBarButton},

  setup() {
    return {};
  },
  computed: {
    ...mapState({
      isAuth: state => state.auth.isAuth
    })
  },
  methods: {
    ...mapActions({
      checkAuth: "auth/checkAuth"
    }),
    logout() {
      localStorage.removeItem("token");
      this.checkAuth();
    },
  }
};
</script>

<style lang="css" scoped>
.navbar {
  display: flex;
  height: 50px;
  background-color: teal;
  box-shadow: 2px 2px 4px gray;
  display: flex;
  align-items: center;

  padding: 0 15px;
}

.navbar_button {
  margin-left: auto;
  display: flex;
}
</style>
