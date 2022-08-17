import apiCreateTemplate from "@/api/Template/apiCreateTemplate";

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
        async createTemplate({commit}: any, payload: { name: string }) {
            const result = await apiCreateTemplate(payload.name);
            console.log(result)
        }
    }
    ,
    namespaced: true
}

export default templateModule