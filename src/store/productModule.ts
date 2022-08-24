import apiAddProduct from "@/api/Product/apiAddProduct";
import {ParamsProduct} from "@/api/Product/TypesProduct";

const productModule = {
    state: () => ({}),
    getters: {},
    mutations: {},
    actions: {
        async addProduct({dispatch}: any, payload: ParamsProduct) {
            const result = await apiAddProduct(payload);
        }
    },
    namespaced: true
}

export default productModule