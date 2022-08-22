import apiPutProperty from "@/api/Template/apiPutProperty";
import apiCreateTemplate from "@/api/Template/apiCreateTemplate";
import apiGetTemplateByPage from "@/api/Template/apiGetTemplateByPage";
import apiGetProperetyByPage from "@/api/Template/apiGetPropertyByPage";
import apiDeleteProperty from "@/api/Template/apiDeleteProperty";

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

            const result = apiPutProperty({templateId: payload.templateId, data: payload.data});
        },

        async fetchPropertys(
            {state, commit}: any,
            payload: { page?: number; limit?: number; templateId: number }
        ) {
            console.log("render")
            try {
                if (payload.page) commit("setPropPage", payload.page);
                if (payload.limit) commit("setPropLimit", payload.limit)

                let result: any = await apiGetProperetyByPage(state.propPage, state.propLimit, payload.templateId);
                result = result.value.data.propertys.map((item: any) => {
                    return {...item, exist: "exist"}
                })
                console.log("payload", result);
                commit("setProperty", result)
            } catch (e) {

            }

        },
        async deleteProperty({commit, dispatch}: any, payload: { id: number, templateId: number }) {
            const result: any = await apiDeleteProperty(payload.id);
            console.log(result.value)
            await dispatch("fetchPropertys", {templateId: payload.templateId});
            return result;
        }
    },

    namespaced: true,
};

export default templateModule;
