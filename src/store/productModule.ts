import apiAddProduct from "@/api/Product/apiAddProduct";
import {ParamsProduct} from "@/api/Product/TypesProduct";
import apiGetProductByPage from "@/api/Product/apiGetProductByPage";
import apiGetProductInfoByPage from "@/api/Product/apiGetInfoProduct";

const productModule = {
    state: () => ({
        products: [],
        page: 1,
        limit: 3,
        totalPages: 0,
        info: [],
        infoPage: 1,
        infoLimit: 3,
        infoTotalPage: 0

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
        setInfoProductions(state: any, props: []) {
            state.info = props;
        },
        setInfoPage(state: any, props: number) {
            state.infoPage = props;
        },
        setInfoLimit(state: any, props: number) {
            state.infoLimit = props;
        },
        setInfoTotalPages(state: any, props: number) {
            state.infoTotalPage = props;
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
        },
        async fetchProductInfoByPage({
                                         state,
                                         commit
                                     }: any, payload: { page?: number, limit?: number, productId: number }) {
            console.log(payload)
            if (payload?.page) commit("setInfoPage", payload.page);
            if (payload?.limit) commit("setInfoLimit", payload.limit);
            const result: any = await apiGetProductInfoByPage(payload.productId, state.infoPage, state.infoLimit);

            if (result.value.data?.productInfo) {
                console.log(result.value.data);
                commit("setInfoProductions", [...result.value.data.productInfo]);
                commit(
                    "setInfoTotalPages",
                    Math.ceil(result.value.data.count / state.infoLimit)
                );
            }
        }

    },
    namespaced: true
}

export default productModule