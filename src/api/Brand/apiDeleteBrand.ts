import router from "@/router/router";
import $api from "@/api/http";

export default async function apiDeleteBrand(params: number) {
    console.log("params", params);
    try {
        const response = await $api.post(
            "/product-brand/delete",
            {
                id: params,
            }
        );
    } catch (error: any) {
        router.push(`/error/${error.response.data.message}`);
    }
    return true;
}
