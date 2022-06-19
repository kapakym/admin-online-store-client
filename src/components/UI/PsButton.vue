<template>
  <button class="mybutton">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "ps-button",
  setup() {
    return {};
  },
};
</script>

<style lang="css" scoped>
.mybutton {
  margin-top: 15px;
  /* align-self: flex-end; */
  padding: 10px 15px;
  background: none;
  color: black;
  border: 1px solid black;
  border-radius: 5px;
}

.mybutton:hover {
  background: lightgray;
  cursor: pointer;
}
</style>