import axios from "axios";
import {ref} from "vue";

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
        result.value = await axios.post(
            "http://127.0.0.1:7000/product-brand",
            formData,
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            }
        );
        console.log(result);
    } catch (error) {
        console.log(error);
    }


    return result;
}
