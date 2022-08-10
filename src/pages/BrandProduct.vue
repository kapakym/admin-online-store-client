<template lang="html">
  <div>
    <ps-dialog v-model:show="dlgNewBrandVisible">
      <new-brand @hide="dlgNewBrandVisible=false"/>
    </ps-dialog>
  </div>
  <div>
    <ps-dialog v-model:show="dlgChangeLogoVisible">
      <change-brand-picture :params="selectedBrand" @hide="dlgChangeLogoVisible=false" @refresh="refresh"/>
    </ps-dialog>
  </div>
  <div>
    <ps-button @click="dlgNewBrandVisible = true">
      <ps-icon :name="'add'"/>
      Добавить
    </ps-button>
  </div>
  <ps-paginator :totalPages="totalPages" :currentPage="page" @changePage="changePage"/>

  <div v-for="item in brands" v-if="isBrandLoading">
    <item-brand :brand="item" @changeLogo="chageLogo"/>
  </div>
  <div v-else>Загрузка данных</div>
  <ps-paginator :totalPages="totalPages" :currentPage="page" @changePage="changePage"/>
</template>

<script>
import NewBrand from "@/components/Brand/NewBrand.vue";
import ItemBrand from "@/components/Brand/ItemBrand";
import ChangeBrandPicture from "@/components/Brand/ChangeBrandPicture";
import PsDialog from "@/components/UI/PsDialog";
import PsIcon from "@/components/UI/PsIcon";
import {mapActions, mapState} from "vuex";

export default {
  components: {PsIcon, PsDialog, ChangeBrandPicture, ItemBrand, NewBrand},

  computed: {
    ...mapState({
      brands: state => state.brand.brands,
      page: state => state.brand.page,
      totalPages: state => state.brand.totalPages,
      limit: state => state.brand.limit

    })
  },
  mounted() {
    this.isBrandLoading = true;
    this.changePage(this.page);
  },
  data() {
    return {
      dlgNewBrandVisible: false,
      dlgChangeLogoVisible: false,
      isBrandLoading: true,
      selectedBrand: {}
    };
  },
  methods: {
    ...mapActions({
      fetchBrands: "brand/fetchBrands"
    }),
    changePage(numberPage) {
      this.fetchBrands({page: numberPage});
    },
    chageLogo(params) {
      console.log(params)
      this.selectedBrand = params;
      this.dlgChangeLogoVisible = true;
    }
  }

};


</script>
<style>


</style>
