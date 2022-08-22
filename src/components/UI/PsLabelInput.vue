<template>
  <div class="labelInput">
    <div class="pslabel">
      <label style="margin: 5px">
        <slot></slot>
      </label>
    </div>
    <div class="psinput">
      <ps-input
          v-model="modelValue"
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
    placeholder: String,
  },
  methods: {
    updateInput(event) {
      console.log(event.target.value);
      this.$emit("update:modelValue", event.target.value);
    },
  },

  mounted() {
   
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
  margin: 5px;
}

.psinput {
  display: flex;
  align-items: center;
  width: 60%;
  margin-right: 10px;
}
</style>