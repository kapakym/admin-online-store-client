import axios from "axios";
import {ref} from "vue";

interface UserParams {
    email: string;
    password: string;
    roles: [];
    statusBan: boolean,
    banReason: string,
}

export default async function apiGetRoles() {
    const response = ref({});
    try {
        response.value = await axios.get(
            "http://localhost:7000/roles",
        );
    } catch (error) {
        console.log(error);
    }


    return response
}
