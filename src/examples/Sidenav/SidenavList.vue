<template>
  <div
    id="sidenav-collapse-main"
    class="w-auto h-auto collapse navbar-collapse max-height-vh-100 h-100"
  >
    <ul class="navbar-nav">
      <li class="nav-item">
        <sidenav-collapse nav-text="Dashboard" :to="{ name: 'Dashboard' }">
          <template #icon>
            <icon name="dashboard" />
          </template>
        </sidenav-collapse>
      </li>
      <li class="nav-item">
        <sidenav-collapse nav-text="Sign In" :to="{ name: 'Sign In' }">
          <template #icon>
            <icon name="sign-in" />
          </template>
        </sidenav-collapse>
      </li>
      
      
      
      <li class="nav-item">
        <sidenav-collapse nav-text="Policies & Transactions" :to="{ name: 'PoliciesAndTransactions' }">
          <template #icon>
            <icon name="sign-up" />
          </template>
        </sidenav-collapse>
      </li>
  
    </ul>
  </div>
  
</template>
<script>
import Icon from "@/components/Icon.vue";
import SidenavCollapse from "./SidenavCollapse.vue";


export default {
  name: "SidenavList",
  components: {
    Icon,
    SidenavCollapse,
   
  },
  props: {
    cardBg: {
      type: String,
      default: ""
    },
  },
  data() {
    return {
      isActive: "active",
    };
  },
  methods: {
    getRoute() {
      const routeArr = this.$route.path.split("/");
      return routeArr[1];
    },
  },
};
</script>
