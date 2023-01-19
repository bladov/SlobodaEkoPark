<template lang="">
  <div class="gallery section section-grey">
    <div class="container">
      <h2 class="gallery__title">Наша галерея</h2>

      <div class="gallery__wrapper">
        <div class="gallery__content">
          <!-- 1 -->
          <div class="gallery__item wide" data-aos="fade-up">
            <img class="gallery__picture" src="/gallery-1.jpg" alt="" />
          </div>
          <!-- 2 -->
          <div class="gallery__item tall" data-aos="fade-up">
            <img class="gallery__picture" src="/gallery-2.jpg" alt="" />
          </div>
          <!-- 3 -->
          <div class="gallery__item big" data-aos="fade-up">
            <img class="gallery__picture" src="/gallery-3.jpg" alt="" />
          </div>
          <!-- 4 -->
          <div
            class="gallery__item wide"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="600"
          >
            <img class="gallery__picture" src="/gallery-4.jpg" alt="" />
          </div>
          <!-- 5 -->
          <div
            class="gallery__item wide"
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-duration="800"
          >
            <img class="gallery__picture" src="/gallery-5.jpg" alt="" />
          </div>
          <!-- 6 -->
          <div
            class="gallery__item tall"
            data-aos="fade-up"
            data-aos-delay="600"
            data-aos-duration="900"
          >
            <img class="gallery__picture" src="/gallery-6.jpg" alt="" />
          </div>
          <!-- 7 -->
          <div
            class="gallery__item tall"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="500"
          >
            <img class="gallery__picture" src="/gallery-7.jpg" alt="" />
          </div>
          <!-- 8 -->
          <div class="gallery__item big" data-aos="fade-up">
            <img class="gallery__picture" src="/gallery-8.jpg" alt="" />
          </div>
          <!-- 9 -->
          <div
            class="gallery__item tall"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="700"
          >
            <img class="gallery__picture" src="/gallery-9.jpg" alt="" />
          </div>
          <!-- 10 -->
          <div class="gallery__item wide" data-aos="fade-up">
            <img class="gallery__picture" src="/gallery-10.jpg" alt="" />
          </div>
          <!-- 11 -->
          <div
            class="gallery__item tall"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <img class="gallery__picture" src="/gallery-11.jpg" alt="" />
          </div>
          <!-- 12 -->
          <div
            class="gallery__item big"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <img class="gallery__picture" src="/gallery-12.jpg" alt="" />
          </div>
          <!-- 13 -->
          <div
            class="gallery__item tall"
            data-aos="fade-up"
            data-aos-delay="800"
          >
            <img class="gallery__picture" src="/gallery-13.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "GallerySection",
};
</script>

<style lang="scss" scoped>
.gallery {
  &__title {
    color: var(--links-color);
    font-weight: bold;
    font-size: calc(var(--index) * 1.2);
    margin-bottom: 40px;

    @media (max-width: 1100px) {
      text-align: center;
    }

    @media (max-width: 575px) {
      margin-bottom: 20px;
    }
  }

  &__wrapper {
  }

  &__content {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-auto-rows: 300px;
    grid-auto-flow: dense;

    & > div > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 5px;
    }

    & .wide {
      grid-column: span 2;
    }
    & .tall {
      grid-row: span 2;
    }
    & .big {
      grid-column: span 2;
      grid-row: span 2;
    }
  }

  &__item {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__picture {
    max-width: 100%;
    height: auto;
    vertical-align: middle;
    display: inline-block;
  }
}
</style>
