import apiGetCategory from "@/api/Category/apiGetCategory";

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
        async fetchCategory({state, commit}: any) {
            const result: any = await apiGetCategory();
            commit("setCategoryGraph", result.categoryGraph.value);
            commit("setCategoryList", result.categoryList.value)
        }
    },
    namespaced: true
}

export default categoryModule;