import apiCreateProperty from "@/api/Template/apiCreateProperty";
import apiCreateTemplate from "@/api/Template/apiCreateTemplate";
import apiGetTemplateByPage from "@/api/Template/apiGetTemplateByPage";
import apiGetProperetyByPage from "@/api/Template/apiGetPropertyByPage";

const templateModule = {
    state: () => ({
        templates: [],
        page: 1,
        totalPages: 0,
        limit: 3,
        propertys: [],
        propPage: 0,
        propTotalPage: 0,
        propLimit: 3,
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
        },
        setProperty(state: any, props: []) {
            state.propertys = props;
        },
        setPropPage(state: any, props: number) {
            state.propPage = props;
        },
        setPropLimit(state: any, props: number) {
            state.propLimit = props;
        },
        setPropTotalPage(state: any, props: number) {
            state.propTotalPage = props;
        }
    },
    actions: {
        async createTemplate({state, dispatch}: any, payload: { name: string }) {
            const result = await apiCreateTemplate(payload.name);
            dispatch("fetchTemplates", {page: state.page, limit: state.limit});
            console.log(result);
        },
        async fetchTemplates(
            {state, commit}: any,
            payload: { page: number; limit: number }
        ) {
            if (payload.page) commit("setPage", payload.page);
            const result: any = await apiGetTemplateByPage(payload.page, state.limit);
            if (result.value.data?.templates) {
                commit("setTemplates", [...result.value.data.templates]);
                commit(
                    "setTotalPages",
                    Math.ceil(result.value.data.count / state.limit)
                );
            }
        },
        async createProperty(
            {dispatch}: any,
            payload: { templateId: number, data: [] }
        ) {

            const result = apiCreateProperty({templateId: payload.templateId, data: payload.data});
        },

        async fetchPropertys(
            {state, commit}: any,
            payload: { page?: number; limit?: number; templateId: number }
        ) {
            try {
                if (payload.page) await commit("setPropPage", payload.page);
                if (payload.limit) await commit("setPropLimit", payload.limit)
                console.log("payload", payload);
                let result: any = await apiGetProperetyByPage(state.propPage, state.propLimit, payload.templateId);
                console.log(result.value.data.propertys)
                result = await result.value.data.propertys.map((item: any) => {
                    return {...item, exist: "exist"}
                })
                console.log(result)
                commit("setProperty", result)
            } catch (e) {

            }

        },
    },
    namespaced: true,
};

export default templateModule;
