import {createStore} from "vuex";
import userModule from "@/store/userModule";
import authModule from "@/store/authModule";

export default createStore({
    modules: {
        user: userModule,
        auth: authModule
    },
});
