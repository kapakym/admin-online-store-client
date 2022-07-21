import axios from "axios";
import {ref} from "vue";

export default async function apiGetBrand(): Promise<{}> {
    const responseBrand: any = ref([]);
    try {
        const response = await axios.get("http://localhost:7000/product-brand");
        console.log("data", response.data);
        responseBrand.value = response.data;
    } catch (error) {
        console.log(error);
    }

    return responseBrand;
}
