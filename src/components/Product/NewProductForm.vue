<template>
  <ps-dialog v-model:show="visibleDialogAddPhoto">
    <new-photo-product-form v-model="photos" @close="visibleDialogAddPhoto=false"/>
  </ps-dialog>
  <div>
    <h1>Добавление нового продукта</h1>
    <ps-label-input v-model="name" placeholder="Название продукта">Название продукта</ps-label-input>
    <ps-label-input v-model.number="price">Стоимость продукта</ps-label-input>
    <ps-label-input v-model.number="count">Количество продукта на складе</ps-label-input>
    <ps-label-input v-model.number="barcode">Штрих-код</ps-label-input>
    <ps-label-select v-model="currentCategory" :model="categorys.categoryList">Категория продукта</ps-label-select>
    <ps-label-select v-model="currentBrands" :model="brands">Производитель продукта</ps-label-select>
    <ps-label-select v-model="currentTemplates" :model="templates.data">Примениить шаблон</ps-label-select>
    <ps-button @click="visibleDialogAddPhoto=true">
      <ps-icon name="photo"/>
      Добавить фото
    </ps-button>
    <div v-if="photos?.length>0" class="photoContainer">
      <h2>Фотографии товара</h2>
      <div v-for="(item,index) in photos" class="filePhoto">{{ index + 1 }}. {{ item.name }}</div>
    </div>
    <ps-group-buttons style="margin-top: 25px">
      <ps-button @click="createProduct">
        <ps-icon name="create" style="color: green"/>
        Создать
      </ps-button>
      <ps-button @click="$emit('close')">
        <ps-icon name="cancel" style="color: red"/>
        Отмена
      </ps-button>
    </ps-group-buttons>
  </div>


</template>

<script>
import PsLabelInput from "@/components/UI/PsLabelInput";
import PsLabelSelect from "@/components/UI/PsLabelSelect";
import PsButton from "@/components/UI/PsButton";
import PsIcon from "@/components/UI/PsIcon";
import PsGroupButtons from "@/components/UI/PsGroupButtons";
import apiGetCategory from "@/api/Category/apiGetCategory";
import apiGetBrand from "@/api/Brand/apiGetBrand";
import apiGetTemplate from "@/api/Template/apiGetTemplate";
import PsDialog from "@/components/UI/PsDialog";
import NewPhotoProductForm from "@/components/Product/NewPhotoProductForm";
import {mapActions} from "vuex";

export default {
  name: "NewProductForm",
  components: {NewPhotoProductForm, PsDialog, PsGroupButtons, PsIcon, PsButton, PsLabelSelect, PsLabelInput},
  emits: ["close"],
  methods: {
    ...mapActions({
      addProduct: "product/addProduct"
    })
    ,
    async createProduct() {
      await this.addProduct({
        name: this.name,
        price: this.price,
        count: this.count,
        barcode: this.barcode,
        barandId: this.currentBrands,
        templateId: this.currentTemplates,
        categoryId: this.currentCategory,
        photos: this.photos
      })
    }
  },
  data() {
    return {
      name: "",
      price: 0,
      count: 0,
      barcode: "",
      categorys: [],
      brands: [],
      templates: [],
      currentCategory: 0, currentBrands: 0, currentTemplates: 0,
      visibleDialogAddPhoto: false,
      photos: []
    }
  },
  async mounted() {
    this.categorys = await apiGetCategory();
    this.currentCategory = this.categorys.categoryList[0].id;
    this.brands = await apiGetBrand();
    this.currentBrands = this.brands[0].id;
    this.templates = await apiGetTemplate();
    this.currentTemplates = this.templates.data[0].id
  }
}
</script>

<style scoped>
.photoContainer {

  text-align: left;
  box-shadow: 0 0 5px;
  border-radius: 5px;
  margin: 5px;
  padding: 5px;
  overflow: auto;
  max-height: 200px;
}

.filePhoto {
  font-size: 1.2rem;

}
</style>