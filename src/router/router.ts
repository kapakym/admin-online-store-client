import Main from "@/pages/Main.vue";
import UserPage from "@/pages/UserPage.vue";
import UserPageComp from "@/pages/UserPageComposition.vue";
import Contacts from "@/pages/Contacts.vue";
import CategoryProducts from "@/pages/CategoryProduct.vue";

import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "", component: Main },
  { path: "/user", component: UserPage },
  { path: "/userComp", component: UserPageComp },
  { path: "/contacts", component: Contacts },
  { path: "/category", component: CategoryProducts },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
