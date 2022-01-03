<template>
  <the-navbar />
  <router-view />
</template>
<script>
import TheNavbar from "@/components/TheNavbar";
export default {
  name: "home",
  components: {
    TheNavbar,
  },
};
</script>

