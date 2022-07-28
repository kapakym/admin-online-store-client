<template lang="html">
  <div>
    <ps-dialog v-model:show="dlgNewBrandVisible">
      <new-brand @refresh="refresh" @hide="dlgNewBrandVisible=false"/>
    </ps-dialog>
  </div>
  <div>
    <ps-dialog v-model:show="dlgChangeLogoVisible">
      <change-brand-picture :params="selectedBrand" @hide="dlgChangeLogoVisible=false"/>
    </ps-dialog>
  </div>
  <div>
    <ps-button @click="dlgNewBrandVisible = true">Добавить</ps-button>
  </div>
  <div v-for="item in allBrands" v-if="isBrandLoading">
    <item-brand :brand="item" @refresh="refresh" @changeLogo="chageLogo"/>
  </div>
  <div v-else>Загрузка данных</div>
</template>

<script>
import serverMixin from "@/mixins/serverMixin"
import NewBrand from "@/components/Brand/NewBrand.vue";
import useBrands from "@/hooks/useBrands";
import apiGetBrand from "@/api/apiGetBrand";
import ItemBrand from "@/components/Brand/ItemBrand";
import ChangeBrandPicture from "@/components/Brand/ChangeBrandPicture";
import PsDialog from "@/components/UI/PsDialog";

export default {
  components: {PsDialog, ChangeBrandPicture, ItemBrand, NewBrand},
  mixins: [serverMixin],
  setup(props) {
    const {allBrands, isBrandLoading} = useBrands();

    return {allBrands, isBrandLoading};
  },
  data() {
    return {
      dlgNewBrandVisible: false,
      dlgChangeLogoVisible: false,
      selectedBrand: {}
    };
  },
  methods: {
    async refresh() {
      this.dlgNewBrandVisible = false;
      const {responseBrand} = await apiGetBrand();
      this.allBrands = responseBrand.value;
    },
    chageLogo(params) {
      console.log(params)
      this.selectedBrand = params;
      this.dlgChangeLogoVisible = true;
    }
  }

};


</script>
<style></style>
