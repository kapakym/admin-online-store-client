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
  data() {
    return {
      sss: {name: ""}
    }
  },
  mounted() {
    this.$store.dispatch("auth/checkAuth")
    // const token = localStorage.getItem("token");
    // if (token) this.$store.commit("auth/setAuth", true);
  }
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

body {
  display: block;
  /*background: lightgray;*/

}

.app {
  display: flex;
  flex-direction: column;
}

.global {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: auto;
}
</style>