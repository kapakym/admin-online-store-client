import router from "@/router/router";
import $api from "@/api/http";


export default async function apiPutInfoProduct(params: { productId: number, info: [] }) {
    try {
        console.log(params)
        const result = await $api.put(
            "/product/info",
            params
        );
    } catch (error: any) {
        await router.push(`/error/${error.response.data.message}`);
    }

}