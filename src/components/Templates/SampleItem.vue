<template>
  <div class="itemtemplate">
    <ps-input v-model="item.name"/>
    <div>
      <ps-group-buttons>
        <ps-button>
          <ps-icon name="delete" style="color: red"/>
          Удалить
        </ps-button>
        <ps-button @click="edit">
          <ps-icon name="edit"/>
          Редактировать шаблон
        </ps-button>
        <ps-button>
          <ps-icon name="save" style="color: green"/>
          Сохранить
        </ps-button>
      </ps-group-buttons>
    </div>
  </div>
</template>

<script>
import PsDialog from "../UI/PsDialog.vue";

export default {
  components: {PsDialog},
  name: "SampleItem",

  props: {
    item: Object,
  },
  data() {
    return {
      visibleEditTemplateDialog: false,
    };
  },
  methods: {
    edit() {
      console.log("Hello");
      this.$emit("edit", this.item);
    },
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
</style>
