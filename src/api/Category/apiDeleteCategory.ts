import router from "@/router/router";
import $api from "@/api/http";

export default async function apiDeleteCategory(params: number) {
    try {
        const response = await $api.post(
            "/product-type/delete",
            {
                id: params,
            }
        );
    } catch (error: any) {
        router.push(`/error/${error.response.data.message}`);
    }
    // return true;
}
