<template>
  <section>
    <div class="slider">
      <swiper
        :modules="modules"
        :slides-per-view="1"
        :space-between="25"
        :navigation="true"
        :autoplay="{ delay: 4000 }"
        :pagination="{ clickable: true }"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        class="swiper"
      >
        <swiper-slide class="slide slide-1">
          <div class="slide__wrapper">
            <div class="slide__content">
              <h2 class="title">Отдых и беседки</h2>
              <p class="text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Veritatis labore cumque quasi dicta, voluptates provident odit
                nisi animi nulla ipsa repellat laboriosam pariatur omnis
                repellendus, distinctio inventore harum, eveniet ducimus.
              </p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide class="slide slide-2">
          <div class="slide__wrapper">
            <div class="slide__content">
              <h2 class="title">Отдых и беседки</h2>
              <p class="text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Veritatis labore cumque quasi dicta, voluptates provident odit
                nisi animi nulla ipsa repellat laboriosam pariatur omnis
                repellendus, distinctio inventore harum, eveniet ducimus.
              </p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide class="slide slide-3">
          <div class="slide__wrapper">
            <div class="slide__content">
              <h2 class="title">Отдых и беседки</h2>
              <p class="text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Veritatis labore cumque quasi dicta, voluptates provident odit
                nisi animi nulla ipsa repellat laboriosam pariatur omnis
                repellendus, distinctio inventore harum, eveniet ducimus.
              </p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide class="slide slide-4">
          <div class="slide__wrapper">
            <div class="slide__content">
              <h2 class="title">Отдых и беседки</h2>
              <p class="text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Veritatis labore cumque quasi dicta, voluptates provident odit
                nisi animi nulla ipsa repellat laboriosam pariatur omnis
                repellendus, distinctio inventore harum, eveniet ducimus.
              </p>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<script lang="ts">
// import Swiper core and required modules
import { Navigation, Pagination, A11y, Autoplay } from "swiper";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// Import Swiper styles
export default {
  name: "SectionSlider",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper: any) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation, Pagination, A11y, Autoplay],
    };
  },
};
</script>

<style scoped lang="scss">
.swiper-button-next {
}
.slider {
  height: 100vh;

  @media (max-width: 900px) {
    // max-height: 1200px;
  }
}
.swiper {
  height: 100%;
}
.slide {
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
}

.slide-1 {
  background-image: url("../assets/img/Беседкаjpg.jpg");
}

.slide-2 {
  background-image: url("../assets/img/g-dsa2evHI4.jpg");
}

.slide-3 {
  background-image: url("../assets/img/БеседкаСдиваном.jpg");
}

.slide-4 {
  background-image: url("../assets/img/видНаБеседки.jpg");
}
.slide__wrapper {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--bg-shadow);
  /* opacity: 0.8; */

  // @media (max-width: 900px) {
  //   align-items: flex-start;
  // }
}
.slide__content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  color: var(--text-white);

  @media (max-width: 900px) {
    width: 80%;
  }
}

.title {
  text-align: center;
  /* font-size: 54px; */
  font-size: calc(var(--index) * 2.5);
  font-weight: bold;
  margin-bottom: 40px;
  color: var(--title-color);
}

.text {
  /* font-size: 32px; */
  font-size: calc(var(--index) * 1.3);
  /* line-height: 3rem; */
  line-height: calc(var(--index) * 2);
  text-align: center;
  color: var(--text-white);
}
</style>

<style>
.swiper-pagination-bullet {
  border: 2px solid white;
}
</style>
