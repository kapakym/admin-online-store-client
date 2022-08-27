import {ref} from "vue";
import router from "@/router/router";
import $api from "@/api/http";

export default async function apiGetTemplate(): Promise<{}> {
    const response: any = ref({});
    try {
        const result = await $api.get("/template");
        response.value = result.data;

    } catch (error: any) {
        await router.push(`/error/${error.response.data.message}`);
    }
    return response;
}
