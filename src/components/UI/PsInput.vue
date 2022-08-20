<template>
  <div class="inputtemplate">
    <input
        class="psinput"
        :value="modelValue"
        @change="updateInput"
        :placeholder="placeholder"
        :type="type"
    />
  </div>
</template>

<script>
export default {
  name: "ps-input",
  props: {
    modelValue: [String, Number],
    placeholder: String,
    type: String
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

  align-self: auto;
  padding: 10px;
  background: none;
  color: black;
  border: 1px solid black;
  border-radius: 10px;
  width: 100%;
  margin: 5px;
}

.inputtemplate {
  width: 100%;
  display: flex;
  /*flex-grow: 2;*/
}
</style>
