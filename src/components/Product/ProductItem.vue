<template>

  <div class="pictureItem" @click="$emit('editPhoto', item)">
    <img :src="item.photos.length>0 ? server_url+item.photos[0] : server_url+'notpicture.png'" class="picture">
  </div>
  <div class="containerItem">

    <div class="rowItem">
      <div class="colItem">
        <ps-label-input v-model="item.name">Название:</ps-label-input>
      </div>
      <div class="colItem">
        <ps-label-input v-model.number="item.price">Цена:</ps-label-input>
      </div>
      <div class="colItem">
        <ps-label-input v-model="item.count">Количество:</ps-label-input>
      </div>
    </div>
    <div class="rowItem">
      <div class="colItem">
        <ps-label-input v-model="item.barcode">Штрихкод:</ps-label-input>
      </div>
      <div class="colItem">
        <ps-label-select v-model="item.brandId" :model="brands">Производитель:</ps-label-select>
      </div>
      <div class="colItem">
        <ps-label-select v-model="item.categoryId" :model="categorys">Категория:</ps-label-select>
      </div>

    </div>


  </div>
  <div class="containerItem" style=" align-items: center; ">
    <ps-group-buttons>
      <ps-button @click="saveProduct">
        <ps-icon name="save" style="color: blue"/>

      </ps-button>
      <ps-button @click="onEdit">
        <ps-icon name="edit" style="color: green"/>

      </ps-button>
      <ps-button @click="$emit('editPhoto', item)">
        <ps-icon name="add_photo_alternate" style="color: green"/>

      </ps-button>
      <ps-button @click="deleteProduct">
        <ps-icon name="delete" style="color: red"/>

      </ps-button>
    </ps-group-buttons>
  </div>

</template>

<script>
import serverMixin from "@/mixins/serverMixin";
import PsLabelInput from "@/components/UI/PsLabelInput";
import PsLabelSelect from "@/components/UI/PsLabelSelect";
import PsButton from "@/components/UI/PsButton";
import PsIcon from "@/components/UI/PsIcon";
import PsDialog from "@/components/UI/PsDialog";
import apiPutProduct from "@/api/Product/apiPutProduct";
import {mapActions} from "vuex";

export default {
  name: "ProductItem",
  components: {PsDialog, PsIcon, PsButton, PsLabelSelect, PsLabelInput},
  mixins: [serverMixin],
  data() {
    return {
      visibleDialogInfo: false
    }
  },
  props: {
    item: Object,
    brands: Array,
    categorys: Array,
    templates: Array
  },
  emits: ["edit", "editPhoto"],
  methods: {
    ...mapActions({
      deleteProductAction: "product/deleteProduct"
    }),
    onEdit() {
      this.$emit("edit", this.item)
    },
    async deleteProduct() {

      this.$popup(`Вы действительно хотите удалить "${this.item.name}"`, async () => {
        await this.deleteProductAction({id: this.item.id});
      })
    },
    async saveProduct() {
      this.$popup(`Вы действительно хотите сохранить изменения в "${this.item.name}"`, async () => {
        await apiPutProduct({product: this.item});
      })

    }
  }

}
</script>

<style scoped>
.containerItem {
  display: flex;
  text-align: left;
  box-shadow: 1px 1px 5px;
  margin: 5px;
  border-radius: 5px;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;

}

.containerItem:hover {
  box-shadow: 1px 1px 15px;
}

.rowItem {
  display: flex;
  /*justify-content: space-between;*/
  /*flex-grow: 1;*/
}

.colItem {
  /*display: flex;*/
  margin: 5px;
  padding: 5px;
  width: 30%;
  align-items: center;
}

.picture {
  width: 100px;
}

.pictureItem {
  width: 150px;
  display: flex;
  box-shadow: 1px 1px 5px;
  margin: 5px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
}

.pictureItem:hover {
  box-shadow: 1px 1px 15px;
}
</style>