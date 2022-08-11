import apiGetCategory from "@/api/Category/apiGetCategory";
import apiAddCategory from "@/api/Category/apiAddCategory";

const categoryModule = {
    state: () => ({
        categoryGraph: {},
        categoryList: [],
    }),
    getters: {},
    mutations: {
        setCategoryGraph(state: any, props: any) {
            state.categoryGraph = props;
        },
        setCategoryList(state: any, props: any) {
            state.categoryList = props;
        }
    },
    actions: {
        async fetchCategory({commit}: any) {
            const result: any = await apiGetCategory();
            commit("setCategoryGraph", result.categoryGraph.value);
            commit("setCategoryList", result.categoryList.value)
        },
        async addCategory({commit, dispatch}: any, payload: { name: string, parentId: number, file: Blob }) {
            await apiAddCategory({name: payload.name, parentId: payload.parentId, file: payload.file});
            dispatch("fetchCategory");
        }
    },
    namespaced: true
}

export default categoryModule;