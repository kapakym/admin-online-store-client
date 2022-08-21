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
import {mapActions, mapState} from "vuex";
// import {mapActions} from "vuex";

export default {
  components: {PsIcon, PropertyItem, PsGroupButtons},
  name: "EditTemplateForm",
  computed: {
    ...mapState({
      propertys: state => state.template.propertys
    })
  },
  props: {
    selectTemplate: {}
  },

  data() {
    return {};
  },
  async mounted() {
    console.log("--------------------->", this.selectTemplate.id)
    await this.fetchPropertys({page: 1, limit: 3, templateId: this.selectTemplate.id});
    console.log(this.propertys)
  },
  methods: {
    ...mapActions({
      createProperty: "template/createProperty",
      fetchPropertys: "template/fetchPropertys"
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
