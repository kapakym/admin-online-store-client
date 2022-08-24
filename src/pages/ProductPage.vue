<template>
  <ps-dialog v-model:show="visibleNewProductForm">
    <new-product-form @close="visibleNewProductForm=false"></new-product-form>
  </ps-dialog>
  <ps-button @click="showNewProductFrom">
    <ps-icon name="add"/>
    Добавить
  </ps-button>
</template>

<script>
import PsButton from "@/components/UI/PsButton";
import PsIcon from "@/components/UI/PsIcon";
import PsDialog from "@/components/UI/PsDialog";
import NewProductForm from "@/components/Product/NewProductForm";

export default {
  name: "ProductPage",
  components: {NewProductForm, PsDialog, PsIcon, PsButton},

  methods: {
    showNewProductFrom() {
      this.visibleNewProductForm = true;
    }
  },
  data() {
    return {
      visibleNewProductForm: false
    }
  }
}
</script>

<style scoped>

</style>