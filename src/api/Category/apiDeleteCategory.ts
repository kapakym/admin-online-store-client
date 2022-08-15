import router from "@/router/router";
import $api from "@/api/http";

export default async function apiDeleteCategory(params: number) {
    try {
        const response = await $api.post(
            "/category/delete",
            {
                id: params,
            }
        );
    } catch (error: any) {
        await router.push(`/error/${error.response.data.message}`);
    }
    // return true;
}
