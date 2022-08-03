import {onMounted, ref} from "vue";
import apiGetUsersByPage from "@/api/User/apiGetUsersByPage";

export default function useUser(page: number, limit: number) {
    const users = ref([]);
    const count = ref(Number)
    // Получение всего списка пользователей с сервера

    const fetching = async () => {
        try {
            const response: any = await apiGetUsersByPage(limit, page);
            console.log(response.value)
            users.value = response.value.data.users;
            count.value = response.value.data.count;

        } catch (error) {
            alert("Ошибка");
        }
    };

    onMounted(fetching);

    return {
        users, count
    };
}
