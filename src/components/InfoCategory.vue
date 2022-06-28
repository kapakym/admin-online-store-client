<template>
  <div>
    <h2>Сведения о категории</h2>
    <div class="contentInfo">
      <ps-label-input
        placeholder="Введите название"
        :model="select_category.name"
        type="text"
        >Название категории</ps-label-input
      >

      <ps-label-select :model="response" :select="select_category"
        >Родитель</ps-label-select
      >
      <img :src="'http://localhost:7000/' + select_category.picture" />
      <div>
        <ps-button>Удалить</ps-button>
        <ps-button>Сохранить</ps-button>
      </div>
    </div>
  </div>
</template>

<script>
import PsLabelSelect from "./UI/PsLabelSelect.vue";
// import psLabelInput from "./UI/psLabelInput.vue";
export default {
  components: { PsLabelSelect },
  props: {
    select_category: {},
    response: {},
  },
  data() {
    return {
      name_info: "",
    };
  },
  setup() {
    return {};
  },
  mounted() {},
};
</script>

<style lang="css" scoped>
.contentInfo {
  display: flex;
  flex-direction: column;
}
</style>