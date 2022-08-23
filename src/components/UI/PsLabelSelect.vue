<template>
  <div class="labelInput">
    <div class="pslabel">
      <label>
        <slot></slot>
      </label>
    </div>
    <div class="psselect">
      <select v-model="modelValue" @change="updateSelect" class="psselectstyle">
        <option v-for="item in model" :key="item.id" :value="item.id">
          {{ item.name }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: "ps-label-select",
  props: {
    model: Array,
    modelValue: [String, Number],
  },
  setup() {
    return {};
  },
  methods: {
    updateSelect(event) {
      console.log(event.target.value);
      this.$emit("update:modelValue", event.target.value);
    },
  },
  mounted() {
  },
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

.psselect {
  display: flex;
  align-items: center;
  width: 60%;
  margin-right: 10px;
}

.psselectstyle {
  align-self: auto;
  padding: 10px;
  background: none;
  color: black;
  border: 1px solid black;
  border-radius: 5px;
  width: 100%;
  margin: 5px;
}
</style>
