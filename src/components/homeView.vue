<template>
  <div class="home-view">
    <section class="home-wrapper">
      <div
        data-aos="fade-up"
        data-aos-duration="2000"
        class="home-column image-column"
      >
        <div class="circle">
          <img
            id="circle-image"
            v-bind:src="require('@/assets/images/circle_' + mainColor + '.png')"
          />
        </div>
      </div>

      <div data-aos="fade-up" data-aos-duration="2000" class="home-column">
        <h1>
          <span>Simply a</span>
          Front-end developer
          <span>and a</span>
          User experience designer
        </h1>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "homeView",
  props: {
    mainColor: String,
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/_global.scss";

section.home-wrapper {
  padding: calculateRem(120px) calculateRem(32px) calculateRem(64px)
    calculateRem(32px);
  min-height: 100vh;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: space-between;

  @include desktop {
    flex-flow: row wrap;
    padding: calculateRem(64px) calculateRem(32px);
  }
}

div.home-column {
  flex: 1;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    @include font-size($small_headline);
    text-transform: uppercase;
    font-weight: $black;
    letter-spacing: calculateRem(4px);

    span {
      font-weight: $light;
      @include font-size($sub_headline);
      display: flex;
      align-items: center;
      padding: calculateRem(8px) 0;
    }

    @include tablet {
      width: 80%;
      margin: 0 auto;
    }

    @include desktop {
      width: 100%;
      @include font-size($headline);
    }
  }
}

div.image-column {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding-bottom: calculateRem(64px);

  @include desktop {
    justify-content: flex-start;
    padding-bottom: 0;
  }

  div.circle {
    @include aspect-ratio(1, 1);
    width: 80%;
    height: auto;
    background-color: var(--main-color);
    border-radius: 100%;
    overflow: hidden;

    @include tablet {
      width: 60%;
    }

    @include desktop {
      width: 80%;
    }

    img {
      width: 100%;
      height: auto;
      position: absolute;
      top: 0;
      left: 0;
    }
  }
}
</style>
