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
    <ps-group-buttons>
      <ps-button class="btn" @click="addCategory">
        <ps-icon :name="'done'" style="color:green"/>
        Добавить
      </ps-button>
      <ps-button class="btn" @click="$emit('close')">
        <ps-icon :name="'cancel'" style="color:red"/>
        Отмена
      </ps-button>
    </ps-group-buttons>

  </div>
</template>

<script>
import apiAddCategory from "@/api/apiAddCategory";
import PsGroupButtons from "@/components/UI/PsGroupButtons";
import PsIcon from "@/components/UI/PsIcon";

export default {
  components: {PsIcon, PsGroupButtons},
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
      console.log(typeof this.$refs.fileUpload.files[0])
      const result = await apiAddCategory({
        name: this.category.name,
        parentId: this.parent.id,
        file: this.$refs.fileUpload.files[0],
      });
      await this.$emit("refresh");
      await this.$emit("create");
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
