<template>
  <div class="newuserform">
    <h4>Добавление нового шаблона</h4>
    <ps-input
        v-model="name"
        type="text"
        placeholder="Название категории"
    />


    <ps-group-buttons>
      <ps-button class="btn" @click="add">
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
import {mapActions} from "vuex";

export default {
  name: "NewTemplateFrom",
  data() {
    return {
      name: ""
    }
  },
  methods: {
    ...mapActions({
      createTemplate: "template/createTemplate"
    }),
    async add() {
      await this.createTemplate({name: this.name})
      this.$emit("close")
    }
  }
}
</script>

<style scoped>

</style>