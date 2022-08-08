import axios from "axios";
import router from "@/router/router";

export default async function apiDeleteBrand(params: any) {
    console.log("params", params);
    try {
        const response = await axios.post(
            "http://localhost:7000/product-brand/delete",
            {
                id: Number(params),
            }
        );
    } catch (error: any) {
        router.push(`/error/${error.response.data.message}`);
    }
    return true;
}
