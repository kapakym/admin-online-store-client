import axios from "axios";
import {ref} from "vue";


export default async function apiGetUsersByPage(limit: number, page: number) {
    const response = ref({});
    try {
        response.value = await axios.get(
            "http://localhost:7000/users/page", {params: {limit: limit, page: page}}
        );
    } catch (error) {
        console.log(error);
    }


    return response
}
