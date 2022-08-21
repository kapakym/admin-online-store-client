Rjv
<template>
  <div class="property">
    <ps-check-box/>
    <ps-input
        v-model="item.name"
        type="text"
        placeholder="Введине название свойства"
    ></ps-input>
    <ps-label-select v-model="item.type" :model="types">Тип</ps-label-select>

    <ps-button>
      <ps-icon name="delete" style="color: red"/>

    </ps-button>
  </div>
</template>

<script>
import PsButton from "../UI/PsButton.vue";
import PsIcon from "../UI/PsIcon.vue";
import PsInput from "../UI/PsInput.vue";
import PsLabelSelect from "../UI/PsLabelSelect.vue";
import PsCheckBox from "@/components/UI/PsCheckBox";

export default {
  components: {PsCheckBox, PsInput, PsLabelSelect, PsButton, PsIcon},
  name: "Test",
  created() {
  },
  data() {
    return {
      selected: 0,
      types: [
        {id: 0, name: "строка"},
        {id: 1, name: "число"},
        {id: 2, name: "ссылка"},
      ],
    };
  },
  props: {
    item: Object,
  },
  methods: {},
};
</script>

<style lang="css" scoped>
.property {
  display: flex;
  border: 1px solid teal;
  padding: 5px;
  margin: 5px;
  border-radius: 5px;
}

.property:hover {
  background-color: blanchedalmond;
  cursor: pointer;
}
</style>
