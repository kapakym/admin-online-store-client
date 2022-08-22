<template>
  <div class="itemtemplate" :class="{'changed': changed?.id?.includes(item.id) ? true : false }">
    <ps-input v-model="item.name" :changed="changed" :id="item.id"/>
    <div>
      <ps-group-buttons>
        <ps-button @click="deleteTemp">
          <ps-icon name="delete" style="color: red"/>
          Удалить
        </ps-button>
        <ps-button @click="edit">
          <ps-icon name="edit"/>
          Редактировать шаблон
        </ps-button>
        <ps-button @click="updateTemp">
          <ps-icon name="save" style="color: green"/>
          Сохранить
        </ps-button>
      </ps-group-buttons>
    </div>
  </div>
</template>

<script>
import PsDialog from "../UI/PsDialog.vue";
import PsInput from "@/components/UI/PsInput";
import {mapActions} from "vuex";

export default {
  components: {PsInput, PsDialog},
  name: "SampleItem",

  props: {
    item: Object,
    changed: Object
  },
  data() {
    return {
      visibleEditTemplateDialog: false,
    };
  },
  methods: {
    ...mapActions({
      deleteTemplate: "template/deleteTemplate",
      updateTemplate: "template/putTemplate"
    }),
    edit() {
      console.log("Hello");
      this.$emit("edit", this.item);
    },
    async deleteTemp() {
      await this.deleteTemplate({id: this.item.id})
    },
    async updateTemp() {
      console.log(this.changed)
      await this.updateTemplate({id: this.item.id, name: this.item.name})
      this.changed.id.splice(this.changed.id.findIndex(item => item == this.item.id), 1)
    }

  },
};
</script>

<style scoped>
.itemtemplate {
  display: flex;
  /*border: 1px solid black;*/
  padding: 5px;
  margin: 5px;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;
  box-shadow: 1px 1px 5px black;
}

.itemtemplate:hover {
  background: rgba(220, 220, 220, 0.2);
}

.changed {
  border: 1px solid red;
}
</style>
