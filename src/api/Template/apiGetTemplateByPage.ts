import {ref} from "vue";
import router from "@/router/router";
import $api from "@/api/http";

export default async function apiGetBrandByPage(page: number, limit: number): Promise<{}> {
    const response: any = ref({});
    try {
        response.value = await $api.get("/template/page", {params: {limit: limit, page: page - 1}});

    } catch (error: any) {
        await router.push(`/error/${error.response.data.message}`);
    }
    return response;
}
