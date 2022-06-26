import axios from "axios";
import { ref, onMounted } from "vue";

export default function useUser(aaa: any) {
  const users = ref([]);
  console.log(users, aaa);
  // Получение всего списка пользователей с сервера
  const fetching = async () => {
    try {
      const response = await axios.get("http://localhost:7000/users");
      users.value = response.data;
      // console.log(response.data);
    } catch (error) {
      alert("Ошибка");
    }
  };

  onMounted(fetching);

  return {
    users,
  };
}
