<template lang="html">
  <div>
    <ps-dialog v-model:show="dlgNewBrandVisible">
      <new-brand @refresh="refresh" @hide="dlgNewBrandVisible=false"/>
    </ps-dialog>
  </div>
  <div>
    <ps-button @click="dlgNewBrandVisible = true">Добавить</ps-button>
  </div>
  <div v-for="item in allBrands" v-if="isBrandLoading">
    <item-brand :brand="item" @refresh="refresh"/>
  </div>
  <div v-else>Загрузка данных</div>
</template>

<script>
import serverMixin from "@/mixins/serverMixin"
import NewBrand from "@/components/Brand/NewBrand.vue";
import useBrands from "@/hooks/useBrands";
import apiGetBrand from "@/api/apiGetBrand";
import ItemBrand from "@/components/Brand/ItemBrand";

export default {
  components: {ItemBrand, NewBrand},
  mixins: [serverMixin],
  setup(props) {
    const {allBrands, isBrandLoading} = useBrands();

    return {allBrands, isBrandLoading};
  },
  data() {
    return {
      dlgNewBrandVisible: false,
    };
  },
  methods: {
    async refresh() {
      this.dlgNewBrandVisible = false;
      const {responseBrand} = await apiGetBrand();
      this.allBrands = responseBrand.value;
    },
  }

};


</script>
<style></style>
