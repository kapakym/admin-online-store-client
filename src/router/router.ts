import Main from "@/pages/Main.vue";
import UserPageComp from "@/pages/UserPageComposition.vue";
import Contacts from "@/pages/Contacts.vue";
import CategoryProducts from "@/pages/CategoryProduct.vue";
import BrandProduct from "@/pages/BrandProduct.vue";
import Login from "@/pages/Login"
import ErrorPage from "@/pages/ErrorPage"
import TemplatePage from "@/pages/TemplatePage"

import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {path: "", component: Main},
    {path: "/user", component: UserPageComp},
    {path: "/userComp", component: UserPageComp},
    {path: "/contacts", component: Contacts},
    {path: "/category", component: CategoryProducts},
    {path: "/brand", component: BrandProduct},
    {path: "/login", component: Login},
    {path: "/error/:msg", component: ErrorPage},
    {path: "/templates", component: TemplatePage}
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
