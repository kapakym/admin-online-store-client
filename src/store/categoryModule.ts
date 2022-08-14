import apiGetCategory from "@/api/Category/apiGetCategory";
import apiAddCategory from "@/api/Category/apiAddCategory";
import apiDeleteCategory from "@/api/Category/apiDeleteCategory";
import apiUpdateCategory from "@/api/Category/apiUpdateCategory";
import apiChangePictureCategory from "@/api/Category/apiChangePictureCategory";

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
            console.log(result.categoryGraph.value, result.categoryList.value)
            commit("setCategoryGraph", result.categoryGraph.value);
            commit("setCategoryList", result.categoryList.value)
        },
        async addCategory({commit, dispatch}: any, payload: { name: string, parentId: number, file: Blob }) {
            await apiAddCategory({name: payload.name, parentId: payload.parentId, file: payload.file});
            dispatch("fetchCategory");
        },
        async removeCategory({dispatch}: any, payload: { id: number }) {
            await apiDeleteCategory(payload.id);
            dispatch("fetchCategory");
        },
        async updateCategory({dispatch}: any, payload: { id: number, parentId: number, name: string }) {
            await apiUpdateCategory({id: payload.id, parentId: payload.parentId, name: payload.name});
            dispatch("fetchCategory");
        },
        async changePictureCategory({dispatch}: any, payload: { id: number, file: Blob }) {
            const result = await apiChangePictureCategory({id: payload.id, file: payload.file});
            return result;
        }
    },
    namespaced: true
}

export default categoryModule;