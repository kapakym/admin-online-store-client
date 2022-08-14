import {ref} from "vue";
import router from "@/router/router";
import $api from "@/api/http";


interface UserParams {
    email: string;
    password: string;
}

export default async function apiUserLogin(params: UserParams) {
    const response = ref(<any>{});
    try {
        response.value = await $api.post("/auth/login", {email: params.email, password: params.password})
        console.log(response.value.data.token)
        // @ts-ignore
        localStorage.setItem("token", response.value.data.token)

    } catch (error: any) {
        console.log(error)
        await router.push(`/error/${error.response.data.message}`);
    }


    return response
}
