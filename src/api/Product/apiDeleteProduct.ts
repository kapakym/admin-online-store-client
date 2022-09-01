import $api from "@/api/http";
import router from "@/router/router";
import {ref} from "vue";

export default async function apiDeleteProduct(id: number) {
    const result = ref({})
    try {
        result.value = await $api.delete("/product", {params: {id: id}});
    } catch (error: any) {
        await router.push(`/error/${error.response.data.message}`)
    }
    return result;
}