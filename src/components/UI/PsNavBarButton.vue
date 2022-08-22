<template>
  <div class="navbutton">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "ps-nav-bar-button",
};
</script>

<style lang="css" scoped>
.navbutton {
  display: flex;
  padding: 10px;
  background: teal;
  color: white;
  /*border: 1px solid black;*/
  border-radius: 5px;
  margin: 5px;
  justify-items: center;
  align-items: center;
  width: fit-content;
}

.navbutton:hover {
  color: black;
  cursor: pointer;
}
</style>