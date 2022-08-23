import {ref} from "vue";
import router from "@/router/router";
import $api from "@/api/http";

export default async function apiGetBrand(): Promise<{}> {
    const responseBrand: any = ref([]);
    try {
        const response = await $api.get("/brand");
        // console.log("data", response.data);
        responseBrand.value = response.data;
    } catch (error: any) {
        await router.push(`/error/${error.response.data.message}`);
    }

    return responseBrand;
}
