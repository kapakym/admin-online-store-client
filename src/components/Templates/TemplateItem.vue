<template>
  
  <div style="width: 60%">
    <ps-input v-model="item.name"/>
  </div>
  <div>
    <ps-group-buttons>
      <ps-button @click="deleteItem">
        <ps-icon :name="'delete'"/>
        Удалить
      </ps-button>
      <ps-button @click="changeLogo">
        <ps-icon :name="'add_photo_alternate'"/>
        Изменить логотип
      </ps-button>
      <ps-button @click="update">
        <ps-icon :name="'save'"/>
        Сохранить
      </ps-button>
    </ps-group-buttons>

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
  /*width: 95%;*/
  border: 1px solid black;
  padding: 5px;
  margin: 5px;
  align-items: center;
  justify-content: space-around;
  border-radius: 5px;
}


</style>