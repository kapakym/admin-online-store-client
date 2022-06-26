<template>
  <div class="labelInput">
    <div class="pslabel">
      <label><slot></slot></label>
    </div>
    <div class="psselect">
      <select v-model="select.parentId" @click="onclick" class="psselectstyle">
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
    select: {},
  },
  setup() {
    return {};
  },
  mounted() {},
};
</script>

<style lang="css" scoped>
.labelInput {
  display: flex;
  align-items: center;
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