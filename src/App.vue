<template>
  <div>
    <comp-header />
    <div>
      content
    </div>
    <comp-footer />
  </div>
</template>

<script>
import compHeader from "./components/Header-footer/Header.vue";
import compFooter from "./components/Header-footer/Footer.vue";

export default {
  name: "app",
  components: {
    compHeader,
    compFooter
  }
};
</script>

<style>
@import "./assets/style.css";
</style>
