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
  display: flex;
  padding: 10px;
  background: none;
  color: black;
  border-radius: 5px;
  margin: 5px;
  justify-items: center;
  align-items: center;
  width: fit-content;
  box-shadow: 1px 1px 5px black;
  white-space: nowrap;
}

.mybutton:hover {
  background: lightgray;
  cursor: pointer;
}

.mybutton:active {
  background: bisque;
}


.active {
  background: teal;
  color: white;
}


</style>