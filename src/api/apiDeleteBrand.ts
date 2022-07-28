import axios from "axios";

export default async function apiDeleteBrand(params: any) {
    console.log("params", params);
    try {
        const response = await axios.post(
            "http://localhost:7000/product-brand/delete",
            {
                id: Number(params),
            }
        );
    } catch (error) {
        console.log(error);
    }
    return true;
}
