import axios from "axios";


const $api = axios.create(({baseURL: process.env.VUE_APP_SERVER_URL}));

// Перехватчик, который добавляет в заголовок запроса токен
$api.interceptors.request.use((config: any) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`
    return config
})

export default $api;