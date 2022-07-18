<template>
  <input
      class="psinput"
      :value="modelValue"
      @input="updateInput"
      style="width: 100%"
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
  margin: 5px;
  align-self: auto;
  padding: 10px;
  background: none;
  color: black;
  border: 1px solid black;
  border-radius: 5px;

}
</style>