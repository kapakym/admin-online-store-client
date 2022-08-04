import {onMounted, ref} from "vue";
import apiGetUsersByPage from "@/api/User/apiGetUsersByPage";

export default function useUser(page: number, limit: number) {
    const users = ref([]);
    const count = ref(Number);
    const totalPages = ref(Number);
    // Получение всего списка пользователей с сервера

    const fetching = async () => {
        try {
            const response: any = await apiGetUsersByPage(page, limit);
            console.log(response.value)
            users.value = response.value.data.users;
            count.value = response.value.data.count;
            // @ts-ignore
            totalPages.value = Math.ceil(response.value.data.count / limit);

        } catch (error) {
            alert("Ошибка");
        }
    };

    onMounted(fetching);

    return {
        users, count, totalPages
    };
}
