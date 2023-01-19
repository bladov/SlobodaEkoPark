<script>
import TheHeader from "./components/TheHeader.vue";
import SectionSlider from "./components/SectionSlider.vue";
import ParalaxSection from "./components/ParalaxSection.vue";
import TheHero from "./components/TheHero.vue";
import ServicesSection from "./components/ServicesSection.vue";
import VideoSection from "./components/VideoSection.vue";
import GallerySection from "./components/GallerySection.vue";
import Footer from "./components/Footer.vue";
export default {
  components: {
    TheHeader,
    SectionSlider,
    TheHero,
    ParalaxSection,
    ServicesSection,
    VideoSection,
    GallerySection,
    Footer,
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
    <VideoSection></VideoSection>
    <GallerySection></GallerySection>
  </main>

  <Footer></Footer>
</template>

<style scoped>
main {
  flex: 1 0 auto;
}

h1 {
  color: var(--main-bg-color);
}
</style>
