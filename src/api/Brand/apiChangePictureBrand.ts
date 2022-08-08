import axios from "axios";
import {ref} from "vue";
import router from "@/router/router";

export default async function apiChangePictureBrand(params: any) {
    const result = ref({});
    console.log(params);
    const formData = new FormData();
    formData.append("id", params.id);
    formData.append("picture", params.file);
    try {
        result.value = await axios.post(
            "http://127.0.0.1:7000/product-brand/change-picture",
            formData,
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            }
        );
        console.log(result);
    } catch (error: any) {
        router.push(`/error/${error.response.data.message}`);
    }

    return result;
}
