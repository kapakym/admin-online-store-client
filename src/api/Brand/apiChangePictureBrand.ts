import {ref} from "vue";
import router from "@/router/router";
import $api from "@/api/http";

interface Params {
    id: number;
    file: Blob;
}

export default async function apiChangePictureBrand(params: Params) {
    const result = ref({});
    console.log(params);
    const formData = new FormData();
    formData.append("id", String(params.id));
    formData.append("picture", params.file);
    try {
        result.value = await $api.post(
            "/product-brand/change-picture",
            formData,
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            }
        );
    } catch (error: any) {
        router.push(`/error/${error.response.data.message}`);
    }

    return result;
}
