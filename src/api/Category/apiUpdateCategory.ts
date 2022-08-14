import router from "@/router/router";
import $api from "@/api/http";

interface paramsType {
    id: number;
    parentId: number;
    name: string;
}

export default async function apiUpdateCategory(params: paramsType) {
    console.log("params", params);
    try {
        const response = await $api.post(
            "/product-type/update",
            {
                id: Number(params.id),
                parentId: Number(params.parentId),
                name: params.name,
            }
        );
        console.log(response)
    } catch (error: any) {
        router.push(`/error/${error.response.data.message}`);
    }
    return true;
}
