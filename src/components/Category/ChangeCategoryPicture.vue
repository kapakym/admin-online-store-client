<template>
  <div class="newuserform">
    <h4>Изменение картитнки в категории {{ params?.name }}</h4>
    <input
        class="fileUpload"
        type="file"
        placeholder="Новая картинка для категории"
        ref="fileUpload"
    />
    <ps-group-buttons>
      <ps-button class="btn" @click="changePicture"
      >
        <ps-icon :name="'done'" style="color: green"/>
        Изменить картинку
      </ps-button
      >
      <ps-button class="btn" @click="$emit('close')"
      >
        <ps-icon :name="'cancel'" style="color: red"/>
        Отмена
      </ps-button
      >
    </ps-group-buttons>

  </div>
</template>

<script>
import PsIcon from "@/components/UI/PsIcon";
import {mapActions} from "vuex";

export default {
  components: {PsIcon},

  props: {
    params: {},
  },
  data() {
    return {
      category: {
        name: "",
        picture: "",
      },
    };
  },
  computed: {},
  methods: {
    ...mapActions({
      updatePicture: "category/changePictureCategory"
    }),
    async changePicture() {
      console.log("params", this.params);
      const result = await this.updatePicture({id: this.params.id, file: this.$refs.fileUpload.files[0]})
      this.params.picture = result.value.data.picture;
      this.$emit("close");
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