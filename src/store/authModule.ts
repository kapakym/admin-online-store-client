const authModule: any = {
    state: () => {
        return {
            isAuth: false
        }
    },
    getters: {},
    mutations: {
        setAuth(state: any, props: any) {
            state.isAuth = props;
        }
    },
    actions: {
        checkAuth({state, commit}: any) {
            const token = localStorage.getItem("token");
            if (token) commit("setAuth", true);
            else commit("setAuth", false);
        }
    },
    namespaced: true

}

export default authModule