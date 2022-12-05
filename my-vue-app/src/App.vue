<script lang="ts">
import TheHeader from "./components/TheHeader.vue";
import SectionSlider from "./components/SectionSlider.vue";
import ParalaxSection from "./components/ParalaxSection.vue";
import TheHero from "./components/TheHero.vue";
import ServicesSection from "./components/ServicesSection.vue";

export default {
  components: {
    TheHeader,
    SectionSlider,
    TheHero,
    ParalaxSection,
    ServicesSection,
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
    <ParalaxSection></ParalaxSection>
    <ServicesSection></ServicesSection>
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
