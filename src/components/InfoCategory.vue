<template>
  <div>
    Сведения о категории
    <div>
      <label for="nameCat">Название категории</label>
      <ps-input
        v-model="category_name"
        type="text"
        id="nameCat"
        placeholder="Название категории"
      />
      <label for="parentCat">Родитель</label>
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
</style>