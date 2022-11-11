<script lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
import TheHeader from "./components/TheHeader.vue";
import SectionSlider from "./components/SectionSlider.vue";
import TheHero from "./components/TheHero.vue";

export default {
  components: {
    HelloWorld,
    TheHeader,
    SectionSlider,
    TheHero,
  },

  data() {
    return { count: 4 };
  },
};
</script>

<template>
  <TheHeader />
  <main>
    <SectionSlider />
    <TheHero></TheHero>
    <HelloWorld msg="Gt"></HelloWorld>
    <HelloWorld msg="Gt"></HelloWorld>
    <HelloWorld msg="Gt"></HelloWorld>
    <HelloWorld msg="Gt"></HelloWorld>
    <HelloWorld msg="Gt"></HelloWorld>
    <HelloWorld msg="Gt"></HelloWorld>
    <HelloWorld msg="Gt"></HelloWorld>
    <HelloWorld msg="Gt"></HelloWorld>
    <HelloWorld msg="Gt"></HelloWorld>
    <HelloWorld msg="Gt"></HelloWorld>
    <HelloWorld msg="Gt"></HelloWorld>
  </main>

  <footer class="">footer</footer>
</template>

<style scoped>
main {
  flex: 1 0 auto;
}

h1 {
  color: var(--main-bg-color);
}
</style>
