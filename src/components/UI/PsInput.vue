<template>
  <div class="inputtemplate" :class="{'changedInput' : changed?.id?.includes(this.id)}">
    <input
        class="psinput"
        v-model="modelValue"
        @input="updateValue"
        :placeholder="placeholder"

    />
  </div>
</template>

<script>
export default {
  name: "ps-input",
  props: {
    modelValue: "",
    placeholder: String,
    type: String,
    changed: Object,
    id: Number,

  },
  data() {
    return {
      defaultValue: [String, Number]
    }
  },
  beforeUpdate() {

  },
  mounted() {
    
  },
  watch: {},
  methods: {
    updateValue(event) {
      this.$emit('update:modelValue', event.target.value);
      if (!this.changed?.id?.includes(this.id)) this.changed?.id?.push(this.id)
    },
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
  border-radius: 5px;
  width: 100%;
  margin: 5px;
}

.inputtemplate {
  width: 100%;
  display: flex;
  /*flex-grow: 2;*/

}

.changedInput {
  border: 1px solid red;
  border-radius: 5px;
}
</style>
