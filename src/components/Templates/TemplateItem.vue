<template>
  <div class="itemtemplate">

    <ps-input v-model="item.name"/>

    <div>
      <ps-group-buttons>
        <ps-button @click="deleteItem">
          <ps-icon :name="'delete'" style="color: red"/>
          Удалить
        </ps-button>
        <ps-button @click="changeLogo">
          <ps-icon :name="'edit'"/>
          Редактировать шаблон
        </ps-button>
        <ps-button @click="update">
          <ps-icon :name="'save'" style="color:green"/>
          Сохранить
        </ps-button>
      </ps-group-buttons>

    </div>
  </div>


</template>

<script>
export default {
  name: "TemplateItem",
  props: {
    item: Object
  }
}
</script>

<style scoped>
.itemtemplate {
  display: flex;
  border: 1px solid black;
  padding: 5px;
  margin: 5px;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;
}

.itemtemplate:hover {
  background: lightgoldenrodyellow;
}


</style>