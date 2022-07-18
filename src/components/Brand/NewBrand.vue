<template>
  <h4>Добавление категории товара в</h4>
  <ps-input
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
    <ps-button class="btn">Добавить</ps-button>
    <ps-button class="btn">Отмена</ps-button>
  </ps-group-buttons>

</template>

<script>
import PsGroupButtons from "@/components/UI/PsGroupButtons";

export default {
  name: "NewBrand",
  components: {PsGroupButtons}
}
</script>

<style scoped>

</style>