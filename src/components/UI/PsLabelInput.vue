<template>
  <div class="labelInput">
    <div class="pslabel">
      <label>
        <slot></slot>
      </label>
    </div>
    <div class="psinput">
      <ps-input
          :value="modelValue"
          :type="type"
          :placeholder="placeholder"
          @input="updateInput"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "ps-label-input",
  props: {
    modelValue: [String, Number],
    type: String,
    placeholder: String,
  },
  methods: {
    updateInput(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  }
};
</script>

<style lang="css" scoped>
.labelInput {
  display: flex;
  align-items: center;
  width: 100%;
}

.pslabel {
  display: flex;
  align-items: center;
  width: 40%;
  text-align: right;
  justify-content: right;
  margin-right: 10px;
}

.psinput {
  display: flex;
  align-items: center;
  width: 60%;
  margin-right: 10px;
}
</style>