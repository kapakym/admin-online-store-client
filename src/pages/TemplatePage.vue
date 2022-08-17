<template>

  <ps-dialog v-model:show="visibleDialogNewCategory">
    <new-template-from @close="visibleDialogNewCategory=false"/>
  </ps-dialog>
  <ps-dialog>

  </ps-dialog>
  <ps-button @click="visibleDialogNewCategory=true">
    <ps-icon :name="'add'"/>
    Добавить
  </ps-button>
  <ps-paginator v-if="templates.length>0" :current-page="page" :total-pages="totalPages"
                @changePage="changePage"></ps-paginator>
  <template-item v-for="item in templates" :item="item" v-if="templates.length>0"/>
  <div v-else><h1>Нет ни одного шаблона!</h1></div>
  <ps-paginator v-if="templates.length>0" :current-page="page" :total-pages="totalPages"
                @changePage="changePage"></ps-paginator>
</template>

<script>
import PsTable from "@/components/UI/PsTable";
import PsButton from "@/components/UI/PsButton";
import PsIcon from "@/components/UI/PsIcon";
import PsDialog from "@/components/UI/PsDialog";
import NewTemplateFrom from "@/components/Templates/NewTemplateFrom";
import {mapActions, mapState} from "vuex";
import TemplateItem from "@/components/Templates/TemplateItem";
import PsPaginator from "@/components/UI/PsPaginator";

export default {
  name: "TemplatePage",
  components: {PsPaginator, TemplateItem, NewTemplateFrom, PsDialog, PsIcon, PsButton, PsTable},
  computed: {
    ...mapState({
      page: state => state.template.page,
      limit: state => state.template.limit,
      templates: state => state.template.templates,
      totalPages: state => state.template.totalPages
    })
  },
  methods: {
    ...mapActions({
      fetchTemplates: "template/fetchTemplates"
    }),
    async changePage(numberPage) {

      await this.fetchTemplates({page: numberPage, limit: this.limit});
    },
  },
  mounted() {
    this.changePage(1);
  },
  data() {
    return {
      visibleDialogNewCategory: false,
      visibleDialogEditTemplate: false
    }
  }
}
</script>

<style scoped>

</style>