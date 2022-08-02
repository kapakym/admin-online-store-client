<template>
  <div class="mybutton">
    <slot></slot>
  </div>
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
  /* align-self: flex-end; */
  display: flex;
  padding: 10px;
  background: none;
  color: black;
  border: 1px solid black;
  border-radius: 5px;
  margin: 5px;
  justify-items: center;
  align-items: center;
  width: fit-content;

}

.mybutton:hover {
  background: lightgray;
  cursor: pointer;

}
</style>