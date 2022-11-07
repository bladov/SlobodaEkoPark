<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />

  <div class="item" data-aos="fade-up">1</div>
  <div class="item" data-aos="fade-down">2</div>
  <div class="item" data-aos="fade-right">3</div>
  <div class="item" data-aos="fade-left">4</div>

  <div class="item" data-aos="zoom-in">5</div>
  <div class="item" data-aos="zoom-out">6</div>

  <div class="item" data-aos="slide-up">7</div>

  <div class="item" data-aos="flip-up">8</div>
  <div class="item" data-aos="flip-down">9</div>
  <div class="item" data-aos="flip-right">10</div>
  <div class="item" data-aos="flip-left">11</div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

.item {
  width: 200px;
  height: 200px;
  margin: 50px auto;
  padding-top: 75px;
  background: #ccc;
  text-align: center;
  color: #fff;
  font-size: 3em;
}
</style>
