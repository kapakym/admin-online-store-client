<template>
  <input
      class="psinput"
      :value="modelValue"
      @input="updateInput"


  />
</template>

<script>
export default {
  name: "ps-input",
  props: {
    modelValue: [String, Number, Boolean],
  },
  methods: {
    updateInput(event) {
      this.$emit("update:modelValue", event.target.value);

    },
  },
  setup() {
    return {};
  },
};
</script>

<style lang="css" scoped>
.psinput {
  /* margin-top: 15px; */
  display: block;
  box-sizing: border-box;
  align-self: auto;
  padding: 10px;
  background: none;
  color: black;
  border: 1px solid black;
  border-radius: 5px;
  /*width: 100%;*/
  margin: 5px;
}
</style>