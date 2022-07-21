<template lang="html">
  <div>
    <ps-dialog v-model:show="dlgNewBrandVisible">
      <new-brand @hide="dlgNewBrandVisible=false"/>
    </ps-dialog>
  </div>
  <div>
    <ps-button @click="dlgNewBrandVisible = true">Добавить</ps-button>
  </div>
  <div v-for="item in allBrands" v-if="isBrandLoading">
    Название: {{ item.name }}
    <img :src="server_url+item.picture">
  </div>
  <div v-else>Загрузка данных</div>
</template>
<script lang="ts">
import serverMixin from "@/mixins/serverMixin"
import NewBrand from "@/components/Brand/NewBrand.vue";
import useBrands from "@/hooks/useBrands";

export default {
  components: {NewBrand},
  mixins: [serverMixin],
  setup(props: any) {
    const {allBrands, isBrandLoading} = useBrands();

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
