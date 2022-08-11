const categoryModule: any = {
    state: () => ({
        categoryGraph: {},
        categoryList: [],
    }),
    mutations: {
        setCategoryGraph(state: any, props: any) {
            state.categoryGraph = props;
        },
        setCategoryList(state: any, props: any) {
            state.categoryList = props;
        }
    },
    actions: {
        fetchCategory({state, commit}: any) {
        }
    },
    namespaced: true

}