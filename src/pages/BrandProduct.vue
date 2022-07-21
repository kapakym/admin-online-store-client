<template lang="html">
  <div>
    <ps-dialog v-model:show="dlgNewBrandVisible">
      <new-brand @hide="dlgNewBrandVisible=false"/>
    </ps-dialog>
  </div>
  <div>
    <ps-button @click="dlgNewBrandVisible = true">Добавить</ps-button>
  </div>
  Производитель
  <div v-for="item in responseBrand.value">
    Производитель
    Название: {{ item.name }}
  </div>
</template>
<script lang="ts">
import apiGetBrand from "@/api/apiGetBrand";
import NewBrand from "@/components/Brand/NewBrand.vue";

export default {
  components: {NewBrand},
  setup(props: any) {
    const {responseBrand, getAllBrands} = apiGetBrand();
    console.log(responseBrand)
    return {responseBrand, getAllBrands};
  },
  data() {
    return {
      dlgNewBrandVisible: false,
    };
  },
};
</script>
<style></style>
