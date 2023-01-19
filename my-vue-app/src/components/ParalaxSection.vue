<template>
  <div class="paralax" ref="paralax">
    <div class="paralax__wrapper"></div>
  </div>
</template>
<script>
import { onBeforeUnmount, ref } from "vue";
export default {
  name: "ParalaxSection",

  setup() {
    // const paralax = ref(null);
    const paralax = ref(null);

    const setCustomProperty = () => {
      document.documentElement.style.setProperty(
        "--scrollTop",
        `${window.scrollY - paralax.value.offsetTop}px`
      );
    };

    window.addEventListener("scroll", setCustomProperty);

    onBeforeUnmount(() => {
      window.removeEventListener("scroll", setCustomProperty);
    });

    return {
      paralax,
    };
  },
};
</script>
<style lang="scss" scoped>
.paralax {
  position: relative;
  overflow: hidden;
  height: 400px;
  background-color: var(--section-color-white);

  @media (max-width: 900px) {
    height: 200px;
  }

  &__wrapper {
    position: absolute;
    width: 100%;
    height: 200%;
    background-image: url("../assets/img/ПрудСпристани.jpg");
    background-size: cover;
    background-position: center;
    will-change: transform;
    transform: translate3d(0, calc(var(--scrollTop) / 2), 0);

    @media (max-width: 900px) {
      transform: translate3d(0, calc(var(--scrollTop) / 4.5), 0);
    }
  }
}
</style>
