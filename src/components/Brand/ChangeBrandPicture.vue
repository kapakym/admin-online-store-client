<template>
  <div class="newuserform">
    <h4>Изменение логотипа {{ params?.name }}</h4>
    <input
        class="fileUpload"
        type="file"
        placeholder="Новый логотип производителя"
        ref="fileUpload"
    />
    <ps-group-buttons>
      <ps-button class="btn" @click="changePicture" style="width: 100%"
      >Изменить картинку
      </ps-button
      >
      <ps-button class="btn" @click="$emit('hide')" style="width: 100%"
      >Отмена
      </ps-button
      >
    </ps-group-buttons>

  </div>
</template>

<script>

export default {
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
  methods: {
    async changePicture() {
      console.log("params", this.params);
      // const result = await apiChangePictureCategory({
      //   id: this.params.id,
      //   file: this.$refs.fileUpload.files[0],
      // });
      // console.log(result.value);
      // this.params.picture = result.value.data.picture;

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