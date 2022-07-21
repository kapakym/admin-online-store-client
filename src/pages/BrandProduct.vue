<template lang="html">
  <div>
    <ps-dialog v-model:show="dlgNewBrandVisible">
      <new-brand @refresh="refresh"/>
    </ps-dialog>
  </div>
  <div>
    <ps-button @click="dlgNewBrandVisible = true">Добавить</ps-button>
  </div>
  <div v-for="item in allBrands" v-if="isBrandLoading">
    Название: {{ item.name }}
    <img :src="server_url+item.picture" style="width: 100px; height: 100px">
  </div>
  <div v-else>Загрузка данных</div>
</template>

<script>
import serverMixin from "@/mixins/serverMixin"
import NewBrand from "@/components/Brand/NewBrand.vue";
import useBrands from "@/hooks/useBrands";
import apiGetBrand from "@/api/apiGetBrand";

export default {
  components: {NewBrand},
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
