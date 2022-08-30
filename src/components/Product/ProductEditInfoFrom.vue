<template>
  <h1>Редактирование характеристик товара</h1>
  <ps-button>
    <ps-icon name="add"/>
    Добавить
  </ps-button>
  <ps-paginator/>
  <div v-for="item of info">
    <product-info-item :item="item"/>
  </div>
  <ps-paginator/>
  <ps-group-buttons>
    <ps-button>
      <ps-icon name="save" style="color: blue"/>
      Сохранить
    </ps-button>
    <ps-button @click="$emit('close')">
      <ps-icon name="cancel" style="color: red"/>
      Закрыть
    </ps-button>
  </ps-group-buttons>
</template>

<script>
import {mapActions, mapState} from "vuex";
import ProductInfoItem from "@/components/Product/ProductInfoItem";
import PsButton from "@/components/UI/PsButton";
import PsIcon from "@/components/UI/PsIcon";
import PsPaginator from "@/components/UI/PsPaginator";
import PsGroupButtons from "@/components/UI/PsGroupButtons";

export default {
  name: "ProductEditInfoFrom",
  components: {PsGroupButtons, PsPaginator, PsIcon, PsButton, ProductInfoItem},
  props: {
    productId: Number,
  },
  emits: ["edit", "close"],
  computed: {
    ...mapState({
      info: state => state.product.info,
      page: state => state.product.infoPage,
      limit: state => state.product.infoLimit,
      totalPage: state => state.product.infoTotalPage
    })
  },
  methods: {
    ...mapActions({
      getInfo: "product/fetchProductInfoByPage"
    })
  }
  , mounted() {
    this.getInfo({productId: this.productId});
    console.log(this.info)
  }
}
</script>

<style scoped>

</style>