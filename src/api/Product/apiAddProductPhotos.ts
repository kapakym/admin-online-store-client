import router from "@/router/router";
import $api from "@/api/http";


export default async function apiAddProductPhotos(params: { productId: number, photos: Array<any> }) {
    console.log(params)
    const formData = new FormData();
    formData.append("productId", String(params.productId));
    for (const photo of params.photos) formData.append("photo", photo, photo.name);
    try {
        console.log(params);
        const result = await $api.post(
            "/product/photo",
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