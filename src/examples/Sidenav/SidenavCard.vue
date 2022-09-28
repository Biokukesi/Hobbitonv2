<template>
  <div id="sidenavCard" class="shadow-none card card-background card-background-mask-secondary">
    <div class="full-background" :style="{ 'background-image': 'url(' + imgWhiteCurved + ')' }"></div>
    <div class="p-3 card-body text-start w-100">
      <div
        class="mb-3 text-center bg-white shadow icon icon-shape icon-sm d-flex align-items-center justify-content-center border-radius-md"
      >
        <i
          id="sidenavCardIcon"
          class="top-0 text-lg text-dark text-gradient"
          aria-hidden="true"
          :class="iconClass"
        ></i>
      </div>
     
    </div>
  </div>
</template>
<script>
import imgWhiteCurved from "../../assets/img/curved-images/white-curved.jpeg";
export default {
  name: "SidenavCard",
  props: {
    textPrimary: {
      type: String,
      default: ""
    },
    textSecondary: {
      type: String,
      default: ""
    },
    href: {
      type: String,
      default: ""
    },
    linkText: {
      type: String,
      default: ""
    },
    iconClass: {
      type: String,
      default: ""
    },
  },
  data() {
    return {
      imgWhiteCurved,
    };
  },
};
</script>
