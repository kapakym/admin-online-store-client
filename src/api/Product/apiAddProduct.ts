import router from "@/router/router";
import {ParamsProduct} from "@/api/Product/TypesProduct";
import $api from "@/api/http";


export default async function apiAddProduct(params: ParamsProduct) {
    console.log(params)
    const formData = new FormData();
    formData.append("name", params.name);
    formData.append("price", String(params.price));
    formData.append("count", String(params.count));
    formData.append("barcode", String(params.barcode));
    formData.append("brandId", String(params.barandId));
    formData.append("categoryId", String(params.categoryId));
    formData.append("templateId", String(params.templateId));
    console.log(formData.get("name"));
    for (const photo of params.photos) formData.append("photo", photo, photo.name);
    // formData.append("photo", params.photos);
    try {
        console.log(params);
        const result = await $api.post(
            "/product",
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

}