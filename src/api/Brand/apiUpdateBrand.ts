import router from "@/router/router";
import $api from "@/api/http";

interface paramsType {
    id: number;
    name: string;
}

export default async function apiUpdateBrand(params: paramsType) {
    console.log("params", params);
    try {
        const response = await $api.post(
            "/product-brand/update",
            {
                id: params.id,
                name: params.name,
            }
        );
    } catch (error: any) {
        await router.push(`/error/${error.response.data.message}`);
    }
    return true;
}
