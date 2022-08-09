import {onMounted, ref} from "vue";
import apiGetUsersByPage from "@/api/User/apiGetUsersByPage";

export default function useUser(page: number, limit: number) {
    const users = ref([]);
    const count = ref(0);
    const totalPages = ref(0);
    // Получение всего списка пользователей с сервера

    const fetching = async (page: number, limit: number) => {
        try {
            const response: any = await apiGetUsersByPage(page, limit);
            users.value = response.value.data.users;
            count.value = response.value.data.count;
            totalPages.value = Math.ceil(response.value.data.count / limit);
            return users.value
        } catch (error) {
            console.log(error);
        }
    };

    onMounted(() => fetching(page, limit));

    return {
        users, count, totalPages, fetching
    };
}
