<template>
  <div class="newuserform">
    <h4>Добавление категории товара в {{ parent.name }}</h4>
    <ps-input
      v-model="category.name"
      type="text"
      placeholder="Название категории"
    />

    <input
      class="fileUpload"
      type="file"
      placeholder="Картинка для категории"
      ref="fileUpload"
    />
    <ps-button class="btn" @click="addCategory">Добавить</ps-button>
  </div>
</template>

<script>
import axios from "axios";
import apiAddCategory from "@/api/apiAddCategory";
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
    async addCategory() {
      console.log(this.parent);
      const result = await apiAddCategory({
        name: this.category.name,
        parentId: this.parent.id,
        file: this.$refs.fileUpload.files[0],
      });
      // if (!this.parent?.childrens) this.parent.childrens = [];
      this.parent.childrens.push(result.value.data);
      this.$emit("create");
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

.fileUpload {
  /* margin-top: 15px; */
  align-self: auto;
  padding: 10px;
  background: none;
  color: black;
  border: 1px solid black;
  border-radius: 5px;
  /* width: 100%; */
}
</style>