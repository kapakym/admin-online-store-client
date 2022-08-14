import {ref} from "vue";
import router from "@/router/router";
import $api from "@/api/http";

interface UserParams {
    email: string;
    password: string;

}

export default async function apiUserRegistration(params: UserParams) {
    const response = ref({});
    try {
        response.value = await $api.post(
            "/auth/registration",
            {
                email: params.email,
                password: params.password
            }
        );
    } catch (error: any) {
        await router.push(`/error/${error.response.data.message}`);
    }


    return response
}
