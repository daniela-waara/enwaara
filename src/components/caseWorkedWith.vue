<template>
  <div class="case-workedwith">
    <section class="workedwith-wrapper">
      <h2 v-if="workedWith.length">During this project I worked with :</h2>

      <ul v-if="workedWith.length">
        <li v-for="item in workedWith" v-bind:key="item.index">
          {{ item }}<span v-if="workedWith.length > 1">/</span>
        </li>
      </ul>

      <img
        v-if="image"
        v-bind:src="require('@/assets/images/' + image)"
        alt=""
        data-aos="fade-up"
        data-aos-duration="1600"
        data-aos-once="true"
      />

      <a v-if="url" v-bind:href="url" target="_blank"
        >Visit site<span class="fas fa-plane-departure"></span
      ></a>
    </section>
  </div>
</template>

<script>
export default {
  name: "caseWorkedWith",
  props: {
    workedWith: Array,
    image: String,
    url: String,
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/_global.scss";

section.workedwith-wrapper {
  padding: calculateRem(46px) calculateRem(32px) calculateRem(120px)
    calculateRem(32px);
  min-height: 100vh;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: center;

  @include desktop {
    padding: calculateRem(64px) calculateRem(32px) calculateRem(240px)
      calculateRem(32px);
  }

  h2 {
    color: color(white);
    text-transform: uppercase;
    font-weight: $bold;
    @include font-size($tiny_body);
    line-height: 1.2;
    letter-spacing: 1px;
    margin-bottom: calculateRem(16px);

    @include tablet {
      @include font-size($body);
    }
  }

  ul {
    width: auto;
    list-style: none;
    margin: 0 0 calculateRem(64px) 0;
    padding: 0;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: flex-start;

    li {
      color: color(white);
      text-transform: uppercase;
      font-family: $detail-font;
      font-weight: $regular;
      @include font-size($tiny_body);
      line-height: 1.5;
      letter-spacing: 2px;

      @include tablet {
        @include font-size($small_body);
      }

      span {
        display: inline-block;
        padding: 0 calculateRem(6px);
      }

      &:nth-last-child(1) {
        span {
          display: none;
        }
      }
    }
  }

  img {
    width: 100%;
    box-shadow: 0 0 120px 0 rgba(0, 0, 0, 0.2);
  }

  a {
    display: inline-block;
    padding: calculateRem(4px) 0;
    text-decoration: none;
    color: color(white);
    @include font-size($small_body);
    text-transform: uppercase;
    font-weight: $regular;
    letter-spacing: 2px;
    box-shadow: 0px 1px 0px 0px transparent;
    @include transition(all, 0.2s);
    margin-top: calculateRem(64px);

    &.contact-link {
      padding: 0;
      height: calculateRem(32px);
      line-height: calculateRem(32px);
    }

    span {
      @include font-size($tiny_body);
      margin-left: calculateRem(12px);
    }

    &:hover {
      color: var(--main-color);
      box-shadow: 0px 1px 0px 0px var(--main-color);
    }
  }
}
</style>
