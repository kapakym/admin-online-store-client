import $api from "@/api/http";
import router from "@/router/router";
import {ref} from "vue"

export default async function apiPutProperty(prop: { templateId: number, data: Array<{ id: number; name: string; type: string; exist: string }> }
) {
    const result = ref({});
    try {
        result.value = await $api.put("/template/property", prop);
    } catch (error: any) {
        await router.push(`/error/${error.response.data.message}`);
    }
    return result;
}
