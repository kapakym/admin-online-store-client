<template>
  <button class="navbutton"><slot></slot></button>
</template>

<script>
export default {
  name: "ps-nav-bar-button",
};
</script>

<style lang="css" scoped>
.navbutton {
  border: none;
  padding: 10px;
  background: none;
  margin-right: 5px;
  color: white;
}

.navbutton:hover {
  color: black;
  cursor: pointer;
}
</style>