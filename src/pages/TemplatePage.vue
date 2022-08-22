<template>
  <ps-dialog v-model:show="visibleDialogNewCategory">
    <new-template-from @close="visibleDialogNewCategory = false"/>
  </ps-dialog>
  <ps-dialog v-model:show="visibleDialogEditTemplate">
    <edit-template-form :selectTemplate="selectTemplate"
                        @close="visibleDialogEditTemplate = false"></edit-template-form>
  </ps-dialog>

  <ps-button @click="visibleDialogNewCategory = true">
    <ps-icon :name="'add'"/>
    Добавить
  </ps-button>
  <ps-paginator
      v-if="templates.length > 0"
      :current-page="page"
      :total-pages="totalPages"
      @changePage="changePage"
  ></ps-paginator>
  <div v-if="templates.length > 0">
    <sample-item class="templatelist"
                 v-for="item in templates"
                 :item="item"
                 @edit="editTemplate"
                 :key="item.id"
                 :changed="changed"
    />
  </div>

  <div v-else><h1>Нет ни одного шаблона!</h1></div>
  <ps-paginator
      v-if="templates.length > 0"
      :current-page="page"
      :total-pages="totalPages"
      @changePage="changePage"
  ></ps-paginator>
</template>

<script>
import PsTable from "@/components/UI/PsTable";
import PsButton from "@/components/UI/PsButton";
import PsIcon from "@/components/UI/PsIcon";
import PsDialog from "@/components/UI/PsDialog";
import NewTemplateFrom from "@/components/Templates/NewTemplateFrom";
import {mapActions, mapState} from "vuex";
import SampleItem from "@/components/Templates/SampleItem";
import PsPaginator from "@/components/UI/PsPaginator";
import EditTemplateForm from "@/components/Templates/EditTemplateForm";

export default {
  name: "TemplatePage",
  components: {
    PsPaginator,
    SampleItem,
    NewTemplateFrom,
    PsDialog,
    PsIcon,
    PsButton,
    PsTable,
    EditTemplateForm,
  },
  computed: {
    ...mapState({
      page: (state) => state.template.page,
      limit: (state) => state.template.limit,
      templates: (state) => state.template.templates,
      totalPages: (state) => state.template.totalPages,
    }),
  },
  methods: {
    ...mapActions({
      fetchTemplates: "template/fetchTemplates",
    }),
    async changePage(numberPage) {
      console.log(this.changed)
      if (this.changed.id.length === 0) await this.fetchTemplates({page: numberPage, limit: this.limit});
      else this.$popup("У вас есть не сохраненные изменения. Вы действительно хотите перейти на другую страницу?", async () => await this.fetchTemplates({
        page: numberPage,
        limit: this.limit
      }));
    },
    editTemplate(item) {
      console.log(item);
      this.selectTemplate = item;
      console.log(this.selectTemplate)
      this.visibleDialogEditTemplate = true;
    },
  },
  mounted() {
    this.changePage(1);
  },
  data() {
    return {
      visibleDialogNewCategory: false,
      visibleDialogEditTemplate: false,
      selectTemplate: {},
      changed: {id: []}
    };
  },
};
</script>


<style scoped>

</style>
