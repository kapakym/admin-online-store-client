import axios from "axios";

interface paramsType {
    id: number;
    name: string;
}

export default async function apiUpdateBrand(params: paramsType) {
    console.log("params", params);
    try {
        const response = await axios.post(
            "http://localhost:7000/product-brand/update",
            {
                id: Number(params.id),
                name: params.name,
            }
        );
        console.log(response)
    } catch (error) {
        console.log(error);
    }
    return true;
}
