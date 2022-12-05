<template lang="">
  <div class="services-section">
    <div class="container services-section__container">
      <ul class="services-section__list">
        <li class="services-section__item">
          <div class="services-section__servis servis1">Меню</div>
        </li>
        <li class="services-section__item">
          <div class="services-section__servis servis2">Уютные дома</div>
        </li>
        <li class="services-section__item">
          <div class="services-section__servis servis3">Все услуги</div>
        </li>
        <li class="services-section__item">
          <div class="services-section__servis servis4">Беседки на пруду</div>
        </li>
        <li class="services-section__item">
          <div class="services-section__servis servis5">Кальяны</div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "ServicesSection",

  // setup() {
  //   const services = ref({
  //     menu: {
  //       title: "Меню"
  //     },
  //      menu: {
  //       title: "Меню"
  //     },
  //   })

  //   return {};
  // },
};
</script>
<style lang="scss">
.services-section {
  padding: var(--padding-section) 0;
  background-color: var(--section-color-white);
  &__container {
  }

  &__list {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: space-around;

    // display: grid;
    // grid-template-columns: repeat(3, 1fr);
    // grid-template-rows: repeat(3, 1fr);
  }

  &__item {
    position: relative;
    flex: 0 1 30%;
    min-height: calc(var(--index) * 10);
    background-color: #fafafa;
    transition: all 0.2s ease-in-out;
    overflow: hidden;

    &:hover {
      cursor: pointer;
      background-color: #ffffff;
      box-shadow: 4px 20px 35px 14px rgb(13 13 13 / 4%);
    }
  }

  &__servis {
    position: relative;
    z-index: 5;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-image: url("../assets/img/burger.jpg");
    background-size: cover;
    transition: all 0.4s ease-in-out;
    color: var(--text-white);
    font-size: calc(var(--index) * 1.2);

    &:hover {
      cursor: pointer;
      background-color: #ffffff;
      box-shadow: 0px 2px 35px 14px rgb(13 13 13 / 4%);
      transform: scale(1.1);
    }

    &::before {
      z-index: -2;
      display: block;
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      transition: all 0.4s ease-in-out;

      background: rgba(0, 0, 0, 0.527);
    }

    &:hover::before {
      background: rgba(0, 0, 0, 0.425);
    }
  }
}

.servis1 {
  background-image: url("../assets/img/burger.jpg");
}
.servis2 {
  background-image: url("../assets/img/servisec3Home.jpg");
}
.servis3 {
  background-image: url("../assets/img/servisec2.jpg");
}
.servis4 {
  background-image: url("../assets/img/services3.jpg");
}
.servis5 {
  background-image: url("../assets/img/servisec5.jpg");
}
</style>
