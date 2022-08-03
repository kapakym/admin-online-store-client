import axios from "axios";
import {ref} from "vue";

interface UserParams {
    email: string;
    password: string;
    role: string;
}

export default async function apiUserRegistration(params: UserParams) {
    const response = ref({});
    try {
        response.value = await axios.post(
            "http://localhost:7000/auth/registration",
            {
                email: params.email,
                password: params.password,
                role: params.role
            }
        );
    } catch (error) {
        console.log(error);
    }


    return response
}
