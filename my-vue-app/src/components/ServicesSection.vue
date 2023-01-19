<template lang="">
  <div class="services-section section">
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
          <div
            class="services-section__servis servis5"
            @click="showModal('hookahs')">
            Кальяны
          </div>
        </li>
        <li class="services-section__item">
          <div class="services-section__servis servis4">Беседки на пруду</div>
        </li>
      </ul>
    </div>

    <!-- <VueFinalModal name="test" :ssr="false" /> -->
    <!-- <vue-final-modal name="test2" :ssr="false"> Hi</vue-final-modal>
     -->

    <VueFinalModal
      v-model="modalHookahs"
      name="example"
      classes="modal-container"
      content-class="modal-content">
      <button class="modal__close" @click="modalHookahs = false">
        <mdi-close>X</mdi-close>
      </button>
      <span class="modal__title">Hello, vue-final-modal</span>
      <div class="modal__content">
        <p>
          Vue Final Modal is a renderless, stackable, detachable and lightweight
          modal component.
        </p>

        <img src="../assets/img/hookahs.png" alt="hookahs" />
      </div>
    </VueFinalModal>
  </div>
</template>
<script>
import { inject, ref } from "vue";

export default {
  name: "ServicesSection",

  setup() {
    // const show = ref(false);
    // const $vfm = inject("$vfm");

    // const showModal = () => {
    //   $vfm.show("example", { userName: "vue-final-modal" });
    // };
    const modalHookahs = ref(false);
    const showModal = (nameModal) => {
      if (nameModal === "hookahs") {
        modalHookahs.value = true;
      }
    };

    return {
      showModal,
      modalHookahs,
    };
  },

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
<style scoped lang="scss">
.services-section {
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
    filter: drop-shadow(0 0 1rem var(--bg-shadow));
    overflow: hidden;

    &:hover {
      cursor: pointer;
      background-color: #ffffff;
      filter: drop-shadow(0 0 0.75rem var(--main-color));
      // box-shadow: 4px 20px 35px 14px rgb(13 13 13 / 4%);
      // filter: drop-shadow(0 0 1rem var(--bg-shadow));
    }

    @media (max-width: 600px) {
      flex: 1 1 30%;
    }
  }

  &__servis {
    position: relative;
    z-index: 5;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
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

<!-- modal -->

<style scoped>
::v-deep .modal-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
::v-deep .modal-content {
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 0 1rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.25rem;
  background: #fff;
}
.modal__title {
  margin: 0 2rem 0 0;
  font-size: 1.5rem;
  font-weight: 700;
}
.modal__close {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
}
</style>
