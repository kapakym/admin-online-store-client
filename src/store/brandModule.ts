import apiGetBrandByPage from "@/api/Brand/apiGetBrandByPage";
import apiAddBrand from "@/api/Brand/apiAddBrand";
import apiDeleteBrand from "@/api/Brand/apiDeleteBrand";
import apiChangePictureBrand from "@/api/Brand/apiChangePictureBrand";

const brandModule = {
    state: () => ({
        brands: [],
        page: 1,
        totalPages: 0,
        limit: 3
    }),
    getters: {},
    mutations: {
        setBrands(state: any, props: any) {
            console.log(props)
            state.brands = props;
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
        async fetchBrands({state, commit}: any, payload: { page: number }) {
            // Получение всего списка пользователей с сервера
            console.log(payload)
            if (payload.page) commit("setPage", payload.page)
            const result: any = await apiGetBrandByPage(state.page, state.limit);
            console.log(result.value);
            if (result.value.data?.brands) {
                commit("setBrands", result.value.data.brands);
                commit("setTotalPages", Math.ceil(result.value.data.count / state.limit))
            }
        },
        async addBrand({state, dispatch}: any, payload: { name: string, file: Blob }) {
            await apiAddBrand({name: payload.name, file: payload.file});
            dispatch("fetchBrands", {page: state.page})
        },
        async removeBrand({state, dispatch}: any, payload: { id: number }) {
            await apiDeleteBrand(payload.id);
            dispatch("fetchBrands", {page: state.page});
        },
        async changePictureBrand({state, dispatch}: any, payload: { id: number, file: Blob }) {
            await apiChangePictureBrand({id: payload.id, file: payload.file});
            dispatch("fetchBrands", {page: state.page});
        }
    },
    namespaced: true
}

export default brandModule;