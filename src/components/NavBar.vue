<template>
  <div class="navbar">
    <div>Травокософф</div>
    <div class="navbar_button">
      <ps-nav-bar-button @click="$router.push('/products')">
        Каталог товаров</ps-nav-bar-button
      >
      <ps-nav-bar-button @click="$router.push('/user')"
        >Пользователи</ps-nav-bar-button
      >
      <ps-nav-bar-button @click="$router.push('/contacts')"
        >Контакты</ps-nav-bar-button
      >
    </div>
  </div>
</template>

<script>
import PsNavBarButton from "./UI/PsNavBarButton.vue";
export default {
  components: { PsNavBarButton },
  setup() {
    return {};
  },
};
</script>

<style lang="css" scoped>
.navbar {
  height: 50px;
  background-color: teal;
  box-shadow: 2px 2px 4px gray;
  display: flex;
  align-items: center;
  padding: 0 15px;
}

.navbar_button {
  margin-left: auto;
}
</style>