import router from "@/router/router";
import $api from "@/api/http";


export default async function apiPutTemplateProduct(params: { productId: number, templateId: number }) {
    try {
        const result = await $api.put(
            "/product/template",
            params
        );
    } catch (error: any) {
        await router.push(`/error/${error.response.data.message}`);
    }

}