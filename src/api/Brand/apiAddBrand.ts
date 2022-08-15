import {ref} from "vue";
import router from "@/router/router";
import $api from "@/api/http";

interface BrandParams {
    name: string;
    file: Blob;
}

export default async function apiAddBrand(params: BrandParams) {
    const result = ref({});
    const formData = new FormData();
    formData.append("name", params.name);
    formData.append("picture", params.file);
    try {
        result.value = await $api.post(
            "/brand",
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
