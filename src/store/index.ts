import {createStore} from "vuex";
import userModule from "@/store/userModule";
import authModule from "@/store/authModule";
import brandModule from "@/store/brandModule";
import categoryModule from "@/store/categoryModule";

export default createStore({
    modules: {
        user: userModule,
        auth: authModule,
        brand: brandModule,
        category: categoryModule
    },
});
