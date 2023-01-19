<template>
  <div class="background-video">
    <video
      autoplay
      muted
      loop
      id="myVideo"
      src="../assets/video/sloboda-preview.mp4"
      type="video/mp4"
      class="background-video__video"
    >
      <!-- <source src="../assets/video/sloboda-preview.mp4" type="video/mp4" /> -->
    </video>
  </div>
</template>
<script>
export default {
  name: "VideoSection",
};
</script>
<style lang="scss">
.background-video {
  height: 400px;
  position: relative;
  display: flex;

  @media (max-width: 600px) {
    display: none;
  }

  &__video {
    height: 100%;
    object-fit: cover;
    flex: 1 0 auto;
  }
}
</style>
