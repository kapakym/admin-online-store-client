import {ref} from "vue";
import router from "@/router/router";
import $api from "@/api/http";

export default async function apiChangePictureCategory(params: { id: number, file: Blob }) {
    const result = ref({});
    console.log(params);
    const formData = new FormData();
    formData.append("id", String(params.id));
    formData.append("picture", params.file);
    try {
        result.value = await $api.post(
            "/category/change-picture",
            formData,
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            }
        );
        console.log(result);
    } catch (error: any) {
        await router.push(`/error/${error.response.data.message}`);
    }

    return result;
}
