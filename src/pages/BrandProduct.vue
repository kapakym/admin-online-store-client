<template lang="html">
  <div>
    <ps-dialog v-model:show="dlgNewBrandVisible">
      <new-brand @hide="dlgNewBrandVisible=false"/>
    </ps-dialog>
  </div>
  <div>
    <ps-button @click="dlgNewBrandVisible = true">Добавить</ps-button>
  </div>
  <div v-for="item in allBrands">
    Название: {{ item.name }}
    <img src="process.env.VUE_APP_SERVER_URL+item.picture">
  </div>
</template>
<script lang="ts">
import NewBrand from "@/components/Brand/NewBrand.vue";
import useBrands from "@/hooks/useBrands";
// import * as process from "process";

export default {
  components: {NewBrand},
  setup(props: any) {
    const {allBrands, isBrandLoading} = useBrands();
    console.log(process.env.VUE_APP_SERVER_URL)
    return {allBrands, isBrandLoading};
  },
  data() {
    return {
      dlgNewBrandVisible: false,
    };
  },
};


</script>
<style></style>
