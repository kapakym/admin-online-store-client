import apiUserRegistration from "@/api/User/apiUserRegistration";

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
        },
        async registrationUser({state, dispatch}: any, payload: { email: string, password: string }) {
            const user = await apiUserRegistration({email: payload.email, password: payload.password})
            console.log(user)
        }
    },
    namespaced: true

}

export default authModule