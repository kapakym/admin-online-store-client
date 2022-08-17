import apiCreateTemplate from "@/api/Template/apiCreateTemplate";
import apiGetTemplateByPage from "@/api/Template/apiGetTemplateByPage";

const templateModule = {
    state: () => ({
        templates: [],
        page: 1,
        totalPages: 0,
        limit: 3
    }),
    getters: {},
    mutations: {
        setTemplates(state: any, props: []) {
            state.templates = props;
        },
        setPage(state: any, props: number) {
            state.page = props;
        },
        setTotalPages(state: any, props: number) {
            state.totalPages = props;
        },
        setLimit(state: any, props: number) {
            state.limit = props;
        }
    },
    actions: {
        async createTemplate({state, dispatch}: any, payload: { name: string }) {
            const result = await apiCreateTemplate(payload.name);
            dispatch("fetchTemplates", {page: state.page, limit: state.limit})
            console.log(result)
        },
        async fetchTemplates({state, commit}: any, payload: { page: number, limit: number }) {
            if (payload.page) commit("setPage", payload.page)
            const result: any = await apiGetTemplateByPage(payload.page, state.limit);
            if (result.value.data?.templates) {
                commit("setTemplates", [...result.value.data.templates]);
                commit("setTotalPages", Math.ceil(result.value.data.count / state.limit))
            }
        }
    },
    namespaced: true
}

export default templateModule