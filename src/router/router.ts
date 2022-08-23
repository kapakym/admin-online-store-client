import Main from "@/pages/Main.vue";
import UserPageComp from "@/pages/UserPage.vue";
import Contacts from "@/pages/ContactsPage.vue";
import CategoryProducts from "@/pages/CategoryPage.vue";
import BrandProduct from "@/pages/BrandPage.vue";
import Login from "@/pages/LoginPage.vue"
import ErrorPage from "@/pages/ErrorPage"
import TemplatePage from "@/pages/TemplatePage"
import ProductPage from "@/pages/ProductPage"

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
    {path: "/templates", component: TemplatePage},
    {path: "/products", component: ProductPage}

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
