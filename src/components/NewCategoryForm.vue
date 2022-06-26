<template>
  <div class="newuserform">
    <h4>Добавление категории товара в {{ parent.name }}</h4>
    <ps-input
      v-model="category.name"
      type="text"
      placeholder="Название категории"
    />
    <ps-input
      type="text"
      placeholder="Картинка для категории"
      v-model="category.picture"
    />
    <ps-button class="btn" @click="addUser">Добавить</ps-button>
  </div>
</template>

<script>
export default {
  props: {
    parent: {},
  },
  data() {
    return {
      category: {
        name: "",
        picture: "",
      },
    };
  },
  methods: {
    addUser() {
      this.$emit("create", this.category);
      this.category = {};
    },
  },
  setup() {
    return {};
  },
};
</script>

<style lang="css" scoped>
form {
  display: flex;
  flex-direction: column;
}

.newuserform {
  width: 100%;
  display: flex;
  flex-direction: column;
}
</style>