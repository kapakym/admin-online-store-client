<template>
  <div>
    <ps-button @click="add">
      <ps-icon name="add"/>
      Добавить свойство
    </ps-button>
    <div v-for="item in propertys" :key="item.name" class="listproperty">
      <property-item :item="item"/>
    </div>
    <ps-group-buttons>
      <ps-button @click="save">
        <ps-icon name="save"/>
        Сохранить
      </ps-button>

      <ps-button @click="$emit('close')"
      >
        <ps-icon name="cancel" style="color: red"/>
        Отмена
      </ps-button
      >
    </ps-group-buttons>
  </div>
</template>
<script>
import PsIcon from "../UI/PsIcon.vue";
import PropertyItem from "@/components/Templates/PropertyItem";
import PsGroupButtons from "../UI/PsGroupButtons.vue";
import {mapActions} from "vuex";
// import {mapActions} from "vuex";

export default {
  components: {PsIcon, PropertyItem, PsGroupButtons},
  name: "EditTemplateForm",
  computed: {},
  props: {
    selectTemplate: {}
  },
  data() {
    return {
      propertys: [],
    };
  },
  methods: {
    ...mapActions({
      createProperty: "template/createProperty",
    }),
    save() {
      console.log(this.selectTemplate)
      this.createProperty({templateId: this.selectTemplate.id, data: this.propertys});
    },
    add() {
      const newProperty = {
        id: Date.now(),
        name: "",
        type: "строка",
        exist: "new"
      };
      this.propertys.push(newProperty);
      console.log(this.propertys);
    },
  },
};
</script>
<style scoped>

</style>
