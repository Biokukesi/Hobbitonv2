<template>
  <sidenav
    v-if="$store.state.showSidenav"
    :custom_class="$store.state.mcolor"
    :class="[
      $store.state.isTransparent,
      $store.state.isRTL ? 'fixed-end' : 'fixed-start',
    ]"
  />
  <LoaderB v-if = "showLoading" />
  <main
    class="main-content position-relative max-height-vh-100 h-100 border-radius-lg"
    :style="$store.state.isRTL ? 'overflow-x: hidden' : ''"
  >
    <!-- nav -->
    <navbar
      v-if="$store.state.showNavbar"
      :class="[navClasses]"
      :text-white="$store.state.isAbsolute ? 'text-white opacity-8' : ''"
      :min-nav="navbarMinimize"
    />
    <transition name = "router-anim" >
      <router-view/>
   </transition>
   
   
  </main>
</template>
<script>
import Sidenav from "./examples/Sidenav/index.vue";
import LoaderB from "./components/loader.vue"
import Navbar from "@/examples/Navbars/Navbar.vue";

import { mapMutations, mapState } from "vuex";
export default {
  name: "App",
  components: {
    Sidenav,
    LoaderB,
   
    Navbar,
  
  },

  computed: {
    ...mapState({
      showLoading: state =>state.showLoading
    }),
    navClasses() {
      return {
        "position-sticky blur shadow-blur mt-4 left-auto top-1 z-index-sticky":
          this.$store.state.isNavFixed,
        "position-absolute px-4 mx-0 w-100 z-index-2":
          this.$store.state.isAbsolute,
        "px-0 mx-4 mt-4": !this.$store.state.isAbsolute,
      };
    },
  },
  beforeMount() {
    this.$store.state.isTransparent = "bg-transparent";
  },
  methods: {
    ...mapMutations(["toggleConfigurator", "navbarMinimize"]),
  },
};
</script>
<style>
  .router-anim-enter-active{
    animation: coming 1s;
    animation-delay: .5s;
    opacity: 0;
  }
  
  .router-anim-leave-active{
    animation: going 1s;
  }
  
  @keyframes going{
    from{
      transform: translate(0);
    }
    to{
      transform: translate(-50px);
      opacity: 0;
    }
  }
  
  @keyframes coming{
    from{
      transform: translate(-50px);
      opacity: 0;
    }
    to{
      transform: translate(0);
      opacity: 1;
    }
  }
  .page{
    position: static;
    width: inherit;
  }
  
  
  
  
</style>