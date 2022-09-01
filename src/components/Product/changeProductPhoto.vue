<template>
  <ps-dialog v-model:show="visibleDialogAddPhoto">
    <new-photo-product-form @close="visibleDialogAddPhoto=false" @onAdd="onAddPhotos"/>
  </ps-dialog>
  <h1>Фотографии продукта "{{ product.name }}"</h1>
  <ps-button @click="visibleDialogAddPhoto=true">
    <ps-icon name="add"/>
    Добавить
  </ps-button>
  <ps-carusel v-if="photos?.length" v-model="photos" @deletePhoto="deletePhoto"/>
  <ps-group-buttons>
    <ps-button @click="$emit('close')">
      <ps-icon name="close"/>
      Закрыть
    </ps-button>
  </ps-group-buttons>
</template>

<script>
import PsCaruselLoader from "@/components/UI/PsCaruselLoader";
import PsButton from "@/components/UI/PsButton";
import PsIcon from "@/components/UI/PsIcon";
import PsGroupButtons from "@/components/UI/PsGroupButtons";
import apiGetPhotosProduct from "@/api/Product/apiGetPhotosProduct";
import apiDeleteProductPhoto from "@/api/Product/apiDeletePhoto";
import NewPhotoProductForm from "@/components/Product/NewPhotoProductForm";
import apiAddProductPhotos from "@/api/Product/apiAddProductPhotos";

export default {
  name: "changeProductPhoto",
  components: {PsGroupButtons, PsIcon, PsButton, PsCaruselLoader, NewPhotoProductForm},
  props: {
    product: Object
  },
  methods: {
    async deletePhoto(filename) {
      await apiDeleteProductPhoto(filename);
      await this.update();
    },
    async update() {
      this.photos = await apiGetPhotosProduct(this.product.id);

    },
    async onAddPhotos(files) {
      console.log(files);
      await apiAddProductPhotos({productId: this.product.id, photos: files})
      await this.update();
    }
  },
  emits: ["close"],
  async mounted() {
    await this.update();
  },
  data() {
    return {
      photos: [],
      visibleDialogAddPhoto: false,
    }
  },

}
</script>

<style scoped>

</style>