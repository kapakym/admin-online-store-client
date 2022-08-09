import apiGetUsersByPage from "@/api/User/apiGetUsersByPage";
import apiUserRemove from "@/api/User/apiUserRemove";

const userModule: any = {
    state: () => ({
        users: [],
        page: 1,
        totalPages: 0,
        limit: 3
    }),
    getters: {},
    mutations: {

        setPage(state: any, props: number) {
            state.page = props;
        },
        setTotalPages(state: any, props: number) {
            state.totalPages = props
        },
        setLimit(state: any, props: number) {
            state.limit = props;
        },
        setUsers(state: any, props: any) {
            state.users = props;
        }
    },
    actions: {
        async fetchUsers({state, commit}: any, payload: { page: number }) {
            // Получение всего списка пользователей с сервера
            if (payload.page) commit("setPage", payload.page)
            const result: any = await apiGetUsersByPage(state.page, state.limit);
            if (result.value.data?.users) {
                commit("setUsers", [...result.value.data.users]);
                commit("setTotalPages", Math.ceil(result.value.data.count / state.limit))
            }

        },

        async userRemove({state, dispatch}: any, payload: { id: number }) {
            const result = await apiUserRemove({id: payload.id});
            dispatch("fetchUsers", {page: state.page});
        }

    },

    namespaced: true,
};

export default userModule;
