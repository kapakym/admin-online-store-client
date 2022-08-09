import apiGetBrandByPage from "@/api/Brand/apiGetBrandByPage";

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
        }
    },
    namespaced: true
}

export default brandModule;