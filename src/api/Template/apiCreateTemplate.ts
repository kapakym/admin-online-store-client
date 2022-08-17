import $api from "@/api/http";
import router from "@/router/router";

export default async function apiCreateTemplate(name: string) {
    try {
        const result = await $api.post("/template", {name: name})
    } catch (error: any) {
        await router.push(`/error/${error.response.data.message}`);
    }
}