import router from "@/router/router";
import {ref} from "vue";
import $api from "@/api/http";

export default async function apiGetProductByPage(page: number, limit: number) {
    const result = ref({})
    console.log(page, limit)
    try {
        result.value = await $api.get("/product/page", {params: {page: page, limit: limit}})
    } catch (error: any) {
        await router.push(`/error/${error.response.data.message}`);
    }
    console.log(result.value)
    return result;
}