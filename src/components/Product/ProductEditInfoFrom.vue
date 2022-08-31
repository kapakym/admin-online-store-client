<template>
  <h1>Редактирование характеристик товара "{{ product.name }}"</h1>
  <div class="changeTemplate">
    <ps-label-select v-model="product.templateId" :model="templates">Используемый шаблон:</ps-label-select>
    <ps-button @click="changeTemplate">
      <ps-icon name="save" style="color: blue"/>
      Изменить
    </ps-button>
  </div>


  <ps-paginator :total-pages="totalPage" :current-page="page" @changePage="changePage"/>
  <div v-for="item of info">
    <product-info-item :item="item"/>
  </div>
  <ps-paginator :total-pages="totalPage" :current-page="page" @changePage="changePage"/>
  <ps-group-buttons>
    <ps-button @click="saveChanges">
      <ps-icon name="save" style="color: blue"/>
      Сохранить
    </ps-button>
    <ps-button @click="$emit('close')">
      <ps-icon name="cancel" style="color: red"/>
      Закрыть
    </ps-button>
  </ps-group-buttons>
</template>

<script>
import {mapActions, mapState} from "vuex";
import ProductInfoItem from "@/components/Product/ProductInfoItem";
import PsButton from "@/components/UI/PsButton";
import PsIcon from "@/components/UI/PsIcon";
import PsPaginator from "@/components/UI/PsPaginator";
import PsGroupButtons from "@/components/UI/PsGroupButtons";
import apiGetTemplate from "@/api/Template/apiGetTemplate";
import apiPutTemplateProduct from "@/api/Product/apiPutTemplateProduct";
import apiPutInfoProduct from "@/api/Product/apiPutInfoProduct";

export default {
  name: "ProductEditInfoFrom",
  components: {PsGroupButtons, PsPaginator, PsIcon, PsButton, ProductInfoItem},
  props: {
    product: Object
  },
  emits: ["edit", "close"],
  computed: {
    ...mapState({
      info: state => state.product.info,
      page: state => state.product.infoPage,
      limit: state => state.product.infoLimit,
      totalPage: state => state.product.infoTotalPage
    })
  },
  data() {
    return {
      templates: []
    }
  },
  methods: {
    ...mapActions({
      getInfo: "product/fetchProductInfoByPage",
      getTemplates: "template/fetchTemplates"
    }),
    async changeTemplate() {
      this.$popup("ВНИМАНИЕ! При изменении шаблона все характеристики продукта будут удалены", async () => {
        await apiPutTemplateProduct({templateId: this.product.templateId, productId: this.product.id})
        await this.changePage(1);
      });
     
    },
    async changePage(numberPage) {
      await this.getInfo({productId: this.product.id, page: numberPage});
    },
    async saveChanges() {
      await apiPutInfoProduct({productId: this.product.id, info: this.info});
    }
  }
  , async mounted() {
    await this.changePage(1)
    // await this.getInfo({productId: this.product.id});
    const templ = await apiGetTemplate();
    this.templates = templ;
    console.log(this.product)
  }
}
</script>

<style scoped>
.changeTemplate {
  display: flex
}

</style>