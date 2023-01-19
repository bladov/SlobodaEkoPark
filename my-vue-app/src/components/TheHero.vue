<template>
  <section class="hero section section-grey">
    <div class="container hero__container">
      <div class="hero__left-column">
        <div
          class="hero__picture hero__picture-1"
          data-aos="fade-down"
          data-aos-delay="700"
          data-aos-duration="1000"
        >
          <img src="../assets/img/БеседкиНаПруду.jpg" alt="" />
        </div>
        <div
          class="hero__picture hero__picture-2"
          data-aos="fade-right"
          data-aos-delay="500"
        >
          <img src="../assets/img/ВидНаПляж.jpg" alt="" />
        </div>
        <div
          class="hero__picture hero__picture-3"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <img src="../assets/img/МногоБЕседок.jpg" alt="" />
        </div>
      </div>

      <div class="hero__right-column">
        <h2 class="hero__title">О нас</h2>

        <p class="hero__text" data-aos="fade-left" data-aos-delay="300">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum sunt
          aliquid modi eius quaerat incidunt ad, cum inventore tempora dolore,
          suscipit velit quasi iste similique accusantium. Rerum qui aperiam
          reiciendis.
        </p>
        <p class="hero__text" data-aos="fade-left" data-aos-delay="450">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum sunt
          aliquid modi eius quaerat incidunt ad, cum inventore tempora dolore
        </p>
        <p class="hero__text" data-aos="fade-left" data-aos-delay="600">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum sunt
          aliquid modi eius quaerat incidunt ad, cum inventore tempora dolore
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "TheHero",
};
</script>

<style lang="scss">
.hero {
  overflow: hidden;
  // background-color: var(--section-color-white);

  &__container {
    display: flex;
    justify-content: space-between;
    gap: 3rem;

    @media (max-width: 1100px) {
      flex-direction: column;
    }
  }

  &__left-column {
    display: grid;
    gap: 1rem;
    height: 100%;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr 1fr 15px;
  }

  &__picture {
    filter: drop-shadow(0 0 1rem var(--bg-shadow));
    img {
      width: 100%;
      height: 100%;
    }
  }

  &__picture-1 {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 3;
  }

  &__picture-2 {
    transform: translateY(-30px);
  }

  &__picture-3 {
    grid-column-start: 2;
    grid-column-end: 4;
    grid-row-start: 2;
    grid-row-end: 4;
    transform: translateY(64px);
  }

  &__right-column {
    max-width: 550px;

    @media (max-width: 1100px) {
      align-self: center;
    }
  }

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

  &__text {
    // line-height: calc(var(--index) / 0.9);
    font-size: calc(var(--index) / 1.3);
    color: var(--text--black);

    @media (max-width: 1100px) {
      text-align: center;
    }
  }

  &__text:not(:last-child) {
    margin-bottom: 40px;

    @media (max-width: 575px) {
      margin-bottom: 20px;
    }
  }
}
</style>
