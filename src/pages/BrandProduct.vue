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
</template>
<script lang="ts">
import apiGetBrand from "@/api/apiGetBrand";
import NewBrand from "@/components/Brand/NewBrand.vue";

export default {
  components: {NewBrand},
  setup(props: any) {
    const responseBrand = apiGetBrand();
    return {responseBrand};
  },
  data() {
    return {
      dlgNewBrandVisible: false,
    };
  },
};
</script>
<style></style>
