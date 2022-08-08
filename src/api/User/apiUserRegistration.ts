import axios from "axios";
import {ref} from "vue";
import router from "@/router/router";

interface UserParams {
    email: string;
    password: string;
    roles: [];
    statusBan: boolean,
    banReason: string,
}

export default async function apiUserRegistration(params: UserParams) {
    const response = ref({});
    try {
        response.value = await axios.post(
            "http://localhost:7000/auth/registration",
            {
                email: params.email,
                password: params.password,
                roles: params.roles,
                statusBan: params.statusBan,
                banReason: params.banReason,
            }
        );
    } catch (error: any) {
        router.push(`/error/${error.response.data.message}`);
    }


    return response
}
