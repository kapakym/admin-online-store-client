<template>
  <div>
    <nav-bar></nav-bar>
    <div id="app">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
export default {
  components: { NavBar },
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
  width: 100%;
}
</style>