<template>
  <div>
    <comp-header />
    <div>
      <comp-featured />
    </div>
    <comp-footer />
  </div>
</template>

<script>
import compHeader from "./components/Header-footer/Header.vue";
import compFooter from "./components/Header-footer/Footer.vue";
import compFeatured from "./components/Featured/index.vue";

export default {
  name: "app",
  components: {
    compHeader,
    compFooter,
    compFeatured
  }
};
</script>

<style>
@import "./assets/style.css";
</style>
