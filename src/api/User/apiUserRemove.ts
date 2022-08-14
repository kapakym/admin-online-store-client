import {ref} from "vue";
import router from "@/router/router";
import $api from "@/api/http";

interface UserParams {
    id: number;

}

export default async function apiUserRemove(params: UserParams) {
    const response = ref({});
    try {

        response.value = await $api.post(
            "/users/delete",
            {
                userId: params.id,
            }
        );
    } catch (error: any) {
        await router.push(`/error/${error.response.data.message}`);
    }


    return response
}
