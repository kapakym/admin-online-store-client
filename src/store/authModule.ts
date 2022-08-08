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
    actions: {}


}

export default authModule