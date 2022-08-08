import axios from "axios";
import router from "@/router/router";

interface paramsType {
    id: number;
    parentId: number;
    name: string;
}

export default async function apiUpdateCategory(params: paramsType) {
    console.log("params", params);
    try {
        const response = await axios.post(
            "http://localhost:7000/product-type/update",
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
