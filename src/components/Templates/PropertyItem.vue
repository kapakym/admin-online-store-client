<template>
  <div class="property">
    <ps-check-box/>
    <ps-input
        v-model="item.name"
        type="text"
        placeholder="Введине название свойства"
    />
    <ps-label-select v-model="item.type" :model="types">Тип</ps-label-select>

    <ps-button @click="deleteProp">
      <ps-icon name="delete" style="color: red"/>
    </ps-button>
  </div>
</template>

<script>
import PsButton from "../UI/PsButton.vue";
import PsIcon from "../UI/PsIcon.vue";
import PsLabelSelect from "../UI/PsLabelSelect.vue";
import PsCheckBox from "@/components/UI/PsCheckBox";
import {mapActions} from "vuex";

export default {
  components: {PsCheckBox, PsLabelSelect, PsButton, PsIcon},
  name: "Test",
  created() {
  },
  data() {
    return {
      selected: 0,
      types: [
        {id: "строка", name: "строка"},
        {id: "число", name: "число"},
        {id: "ссылка", name: "ссылка"},
      ],
    };
  },
  props: {
    item: Object,
  },
  methods: {
    ...mapActions({
      deleteProperty: "template/deleteProperty"
    }),
    async deleteProp() {
      console.log(this.item.id)
      const result = await this.deleteProperty({id: this.item.id, templateId: this.item.templateId});
    }
  },
};
</script>

<style lang="css" scoped>
.property {
  display: flex;
  /*border: 1px solid black;*/
  padding: 5px;
  margin: 10px;
  border-radius: 5px;
  box-shadow: 1px 1px 5px black;
}

.property:hover {
  background-color: blanchedalmond;
  cursor: pointer;
}
</style>
