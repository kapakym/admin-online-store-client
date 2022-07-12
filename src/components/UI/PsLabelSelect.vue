<template>
  <div class="labelInput">
    <div class="pslabel">
      <label><slot></slot></label>
    </div>
    <div class="psselect">
      <select :value="modelValue" @change="updateSelect" class="psselectstyle">
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
    model: {},
    // parentId: Number,
    modelValue: Number,
  },
  setup() {
    return {};
  },
  methods: {
    updateSelect(event) {
      console.log(event.target.value);
      this.$emit("update:modelValue", Number(event.target.value));
    },
  },
  mounted() {},
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

.psselect {
  display: flex;
  align-items: center;
  width: 60%;
  margin-right: 18px;
}

.psselectstyle {
  width: 100%;
  align-self: auto;
  padding: 10px;
  background: none;
  color: black;
  border: 1px solid black;
  border-radius: 5px;
}
</style>