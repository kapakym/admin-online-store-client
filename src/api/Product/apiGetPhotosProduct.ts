import router from "@/router/router";
import {ref} from "vue";
import $api from "@/api/http";

export default async function apiGetPhotosProduct(id: number) {
    const result = ref({})
    try {
        const response = await $api.get("/product/photo", {params: {productId: id}});
        result.value = response.data;
    } catch (error: any) {
        await router.push(`/error/${error.response.data.message}`);
    }
    console.log(result.value)
    return result;
}