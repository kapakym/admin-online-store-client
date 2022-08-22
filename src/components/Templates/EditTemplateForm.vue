<template>
  <div>
    <ps-button @click="add">
      <ps-icon name="add"/>
      Добавить свойство
    </ps-button>
    <ps-paginator :totalPages="totalPages" :currentPage="page" @changePage="changePage"/>
    <div v-for="item in propertys" :key="item.id" class="listproperty">
      <property-item :item="item"/>
    </div>
    <ps-paginator :totalPages="totalPages" :currentPage="page" @changePage="changePage"/>
    <ps-group-buttons>
      <ps-button @click="save">
        <ps-icon name="save"/>
        Сохранить
      </ps-button>

      <ps-button @click="$emit('close')"
      >
        <ps-icon name="close" style="color: red"/>
        Закрыть
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
import PsPaginator from "@/components/UI/PsPaginator";
// import {mapActions} from "vuex";

export default {
  components: {PsPaginator, PsIcon, PropertyItem, PsGroupButtons},
  name: "EditTemplateForm",
  computed: {
    ...mapState({
      propertys: state => state.template.propertys,
      page: state => state.template.propPage,
      limit: state => state.template.propLimit,
      totalPages: state => state.template.propTotalPage
    })
  },
  props: {
    selectTemplate: {}
  },


  data() {
    return {changed: false};
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
      this.$popup("Вы действительно хотите сохранить изменения", () => this.createProperty({
        templateId: this.selectTemplate.id,
        data: this.propertys
      }));
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
    async changePage(numberPage) {
      this.fetchPropertys({page: numberPage, templateId: this.selectTemplate.id});
    }
  },
};
</script>
<style scoped>

</style>
