<template>
  <div class="inputtemplate">
    <input
        class="psinput"
        :value="modelValue"
        @input="updateInput"


    />
  </div>
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

  align-self: auto;
  padding: 10px;
  background: none;
  color: black;
  border: 1px solid black;
  border-radius: 5px;
  width: 100%;
  margin: 5px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

.inputtemplate {
  display: flex;
  flex-grow: 2;
}
</style>