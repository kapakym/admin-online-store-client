import {ref} from "vue";
import router from "@/router/router";
import $api from "@/api/http";

export default async function apiGetTemplate(): Promise<{}> {
    const response: any = ref({});
    try {
        response.value = await $api.get("/template");

    } catch (error: any) {
        await router.push(`/error/${error.response.data.message}`);
    }
    return response;
}
