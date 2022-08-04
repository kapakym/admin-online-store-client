<template>
  <div class="global">
    <nav-bar></nav-bar>
    <div id="app" class="app">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
  components: {NavBar},
  setup() {
    return {};
  },
};
</script>

<style lang="css">
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  /*width: 100%;*/
}

.global {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}
</style>