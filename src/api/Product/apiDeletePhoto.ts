import $api from "@/api/http";
import router from "@/router/router";
import {ref} from "vue";

export default async function apiDeleteProductPhoto(filename: string) {
    const result = ref({})
    try {
        result.value = await $api.delete("/product/photo", {params: {filename: filename}});
    } catch (error: any) {
        await router.push(`/error/${error.response.data.message}`)
    }
    return result;
}