import axios from "axios";
import {ref} from "vue";


export default async function apiGetUsersByPage(page: number, limit: number) {
    const response = ref({});
    try {
        console.log(limit, page)
        response.value = await axios.get(
            "http://localhost:7000/users/page", {params: {limit: limit, page: page - 1}}
        );
        console.log(response.value)
    } catch (error) {
        console.log(error);
    }


    return response
}
