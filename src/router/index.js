import { createRouter, createWebHashHistory } from "vue-router";
import Dashboard from "@/views/Dashboard.vue";
import Tables from "@/views/Tables.vue";
import ViewCompanies from "@/views/ViewCompanies.vue";
import Profile from "@/views/Profile.vue";
import SignIn from "@/views/SignIn.vue";
import PoliciesAndTransactions from "@/views/PoliciesAndTransactions.vue";

const routes = [
  {
    path: "/",
    name: "/",
    redirect: "/dashboard",
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/tables",
    name: "Tables",
    component: Tables,
  },
  {
    path: "/ViewCompanies",
    name: "ViewCompanies",
    component: ViewCompanies,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/sign-in",
    name: "Sign In",
    component: SignIn,
  },
  {
    path: "/PoliciesAndTransactions",
    name: "PoliciesAndTransactions",
    component: PoliciesAndTransactions,
  },
];

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
  linkActiveClass: "active",
});


export default router;
