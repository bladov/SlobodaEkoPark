<script lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
import TheHeader from "./components/TheHeader.vue";

export default {
  components: {
    HelloWorld,
    TheHeader,
  },

  data() {
    return { count: 4 };
  },
};
</script>

<template>
  <TheHeader />
  <main>
    <h1>hi {{ count }}</h1>
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
  padding-top: 110px;
}

h1 {
  color: var(--main-bg-color);
}
</style>
