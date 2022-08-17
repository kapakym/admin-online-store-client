<template>
  <ps-dialog v-model:show="visibleDialogNewCaregory">
    <new-template-from @close="visibleDialogNewCaregory=false"/>
  </ps-dialog>
  <ps-button @click="visibleDialogNewCaregory=true">
    <ps-icon :name="'add'"/>
    Добавить
  </ps-button>
  <template-item v-for="item in templates" :item="item" v-if="templates.length>0"/>
  <div><h1>Нет ни одного шаблона!</h1></div>

</template>

<script>
import PsTable from "@/components/UI/PsTable";
import PsButton from "@/components/UI/PsButton";
import PsIcon from "@/components/UI/PsIcon";
import PsDialog from "@/components/UI/PsDialog";
import NewTemplateFrom from "@/components/Templates/NewTemplateFrom";
import {mapState} from "vuex";
import TemplateItem from "@/components/Templates/TemplateItem";

export default {
  name: "TemplatePage",
  components: {TemplateItem, NewTemplateFrom, PsDialog, PsIcon, PsButton, PsTable},
  computed: {
    ...mapState({
      page: state => state.template.page,
      limit: state => state.template.limit,
      templates: state => state.template.templates,
      totalPages: state => state.template.totalPages
    })
  },
  data() {
    return {
      visibleDialogNewCaregory: false,
      head: ["s", "s", "sss"],
      test: [{
        id: 1,
        name: "dsfasdfadsf"
      }, {
        id: 1,
        name: "dsfasdfadsf"
      }, {
        id: 1,
        name: "dsfasdfadsf"
      }],
    }
  }
}
</script>

<style scoped>

</style>