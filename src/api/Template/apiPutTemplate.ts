import $api from "@/api/http";
import router from "@/router/router";
import {ref} from "vue"

export default async function apiPutTemplate(prop: { id: number, name: string }
) {
    const result = ref({});
    try {
        result.value = await $api.put("/template", prop);
    } catch (error: any) {
        await router.push(`/error/${error.response.data.message}`);
    }
    return result;
}
