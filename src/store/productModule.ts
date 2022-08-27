import apiAddProduct from "@/api/Product/apiAddProduct";
import {ParamsProduct} from "@/api/Product/TypesProduct";
import apiGetProductByPage from "@/api/Product/apiGetProductByPage";

const productModule = {
    state: () => ({
        products: [],
        page: 1,
        limit: 3,
        totalPages: 0

    }),
    getters: {},
    mutations: {
        setProductions(state: any, props: []) {
            state.products = props;
        },
        setPage(state: any, props: number) {
            state.page = props;
        },
        setLimit(state: any, props: number) {
            state.limit = props;
        },
        setTotalPages(state: any, props: number) {
            state.totalPages = props;
        },
    },
    actions: {
        async addProduct({dispatch}: any, payload: ParamsProduct) {
            const result = await apiAddProduct(payload);
        },

        async getProductsByPage({state, commit}: any, payload: { page?: number, limit?: number }) {
            console.log(payload)
            if (payload?.page) commit("setPage", payload.page);
            if (payload?.limit) commit("setLimit", payload.limit);
            const result: any = await apiGetProductByPage(state.page, state.limit);

            if (result.value.data?.data) {
                console.log(result.value.data);
                commit("setProductions", [...result.value.data.data]);
                commit(
                    "setTotalPages",
                    Math.ceil(result.value.data.count / state.limit)
                );
                console.log(result.value.data.count)
            }
        }
    },
    namespaced: true
}

export default productModule