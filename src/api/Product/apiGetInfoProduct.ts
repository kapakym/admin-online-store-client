import router from "@/router/router";
import {ref} from "vue";
import $api from "@/api/http";

export default async function apiGetProductInfoByPage(productId: number, page: number, limit: number) {
    const result = ref({})
    console.log(page, limit)
    try {
        result.value = await $api.get("/product/info/page", {params: {page: page, limit: limit, productId: productId}})
    } catch (error: any) {
        await router.push(`/error/${error.response.data.message}`);
    }
    console.log(result.value)
    return result;
}