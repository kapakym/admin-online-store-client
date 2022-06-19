import Main from "@/pages/Main.vue";
import UserPage from "@/pages/UserPage.vue";
import Contacts from "@/pages/Contacts.vue";

import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "", component: Main },
  { path: "/user", component: UserPage },
  { path: "/contacts", component: Contacts },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
