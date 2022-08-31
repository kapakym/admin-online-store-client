<template>
  <div class="itemInfoProduct">
    <ps-label-input v-model="item.value" placeholder="Введите значение">{{ item.name }}</ps-label-input>
    <div class="typeInfo">{{ item.type }}</div>
  
  </div>

</template>

<script>
import PsLabelInput from "@/components/UI/PsLabelInput";
import PsGroupButtons from "@/components/UI/PsGroupButtons";
import PsButton from "@/components/UI/PsButton";

export default {
  name: "ProductInfoItem",
  components: {PsButton, PsGroupButtons, PsLabelInput},
  props: {
    item: Object
  }
}
</script>

<style scoped>
.itemInfoProduct {
  display: flex;
  align-items: center;
}

.typeInfo {
  border: 1px solid black;
  width: 100px;
  margin: 5px;
  padding: 5px;
  border-radius: 5px;
}
</style>