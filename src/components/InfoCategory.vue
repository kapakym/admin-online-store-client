<template>
  <div>
    <h2>Сведения о категории</h2>
    <div class="contentInfo">
      <label for="nameCat">Название категории</label>
      <div>
        <ps-input
          v-model="category_name"
          type="text"
          id="nameCat"
          placeholder="Название категории"
        />
        <label for="parentCat">Родитель</label>
      </div>

      <select v-model="select_category">
        <option v-for="item in catresponse" :key="item.id" :value="item.id">
          {{ item.name }}
        </option>
      </select>
      <img
        src="https://htstatic.imgsmail.ru/pic_image/54b7a9fe9fc7976b27b831e2de33bed9/450/450/1670177/"
      />
      <div>
        <ps-button>Удалить</ps-button>
        <ps-button>Сохранить</ps-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {},
  setup() {
    return {};
  },
};
</script>

<style lang="css" scoped>
.contentInfo {
  display: flex;
  flex-direction: column;
}
</style>