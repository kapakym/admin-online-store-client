import axios from "axios";

const userModule: any = {
  state: () => ({
    users: [],
  }),
  getters: {},
  mutations: {
    setUsers(state: any, users: any) {
      console.log(state);
      state.users = users;
    },
  },
  actions: {
    async fetchUsers({ store, commit }: any) {
      // Получение всего списка пользователей с сервера
      try {
        const response = await axios.get("http://localhost:7000/users");
        // store.users = response.data;
        commit("setUsers", response.data);
        console.log(response);
      } catch (error) {
        alert("Ошибка");
      }
    },
  },

  namespaced: true,
};

export default userModule;
