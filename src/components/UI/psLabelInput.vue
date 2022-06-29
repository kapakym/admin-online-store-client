<template>
  <div class="labelInput">
    <div class="pslabel">
      <label><slot></slot></label>
    </div>
    <div class="psinput">
      <ps-input v-model="model" :type="type" :placeholder="placeholder" />
    </div>
  </div>
</template>

<script>
export default {
  name: "ps-label-input",
  props: {
    model: [String, Number],
    type: String,
    placeholder: String,
  },
  setup() {
    return {};
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
}

.psinput {
  display: flex;
  align-items: center;
  width: 60%;
  margin-right: 10px;
}
</style>