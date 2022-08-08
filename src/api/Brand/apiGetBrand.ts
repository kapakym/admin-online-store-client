import axios from "axios";
import {ref} from "vue";
import router from "@/router/router";

export default async function apiGetBrand(): Promise<{}> {
    const responseBrand: any = ref([]);
    try {
        const response = await axios.get("http://localhost:7000/product-brand");
        // console.log("data", response.data);
        responseBrand.value = response.data;
    } catch (error: any) {
        router.push(`/error/${error.response.data.message}`);
    }

    return {responseBrand};
}
