import {ref} from "vue";
import router from "@/router/router";
import $api from "@/api/http";

interface paramsType {
    name: string;
    parentId: number;
    file: Blob
}

export default async function apiAddCategory(params: paramsType) {
    const result = ref({});
    const formData = new FormData();
    formData.append("name", params.name);
    formData.append("parentId", String(params.parentId));
    formData.append("picture", params.file);
    try {
        result.value = await $api.post(
            "/product-type",
            formData,
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            }
        );
    } catch (error: any) {
        await router.push(`/error/${error.response.data.message}`);
    }

    return result;
}
