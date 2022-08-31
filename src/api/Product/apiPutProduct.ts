import router from "@/router/router";
import $api from "@/api/http";


export default async function apiPutProduct(params: { product: object }) {
    try {
        console.log(params)
        const result = await $api.put(
            "/product",
            params
        );
    } catch (error: any) {
        await router.push(`/error/${error.response.data.message}`);
    }

}