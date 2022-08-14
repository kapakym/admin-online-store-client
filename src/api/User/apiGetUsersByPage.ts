import {ref} from "vue";
import router from "@/router/router";
import $api from "@/api/http";


export default async function apiGetUsersByPage(page: number, limit: number) {
    const response = ref({});
    try {
        response.value = await $api.get("/users/page", {params: {limit: limit, page: page - 1}});
    } catch (error: any) {
        await router.push(`/error/${error.response.data.message}`);
    }


    return response
}
