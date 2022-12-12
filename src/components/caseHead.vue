<template>
  <div class="case-head">
    <section class="head-wrapper">
      <ul v-if="types.length">
        <hr
          v-bind:style="{
            color: color,
            backgroundColor: color,
            borderColor: color,
          }"
        />
        <li
          v-for="type in types"
          v-bind:key="type.index"
          v-bind:style="{ color: color, borderColor: color }"
        >
          {{ type }}<span v-if="types.length > 1">/</span>
        </li>
      </ul>

      <h1>{{ title }}</h1>

      <div class="image-container" v-bind:style="{ backgroundColor: color }">
        <img v-bind:src="require('@/assets/images/' + image)" alt="" />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "caseHead",
  props: {
    title: String,
    types: Array,
    color: String,
    image: String,
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/_global.scss";

// Animation
@include keyframes(moveup) {
  from {
    padding-top: calculateRem(80px);
  }
  to {
    padding-top: 0;
  }
}

section.head-wrapper {
  padding: calculateRem(120px) calculateRem(32px) calculateRem(46px)
    calculateRem(32px);

  @include desktop {
    padding: calculateRem(240px) calculateRem(32px) calculateRem(64px)
      calculateRem(32px);
  }
}

div.image-container {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin-top: calculateRem(80px);

  @include desktop {
    margin-top: calculateRem(120px);
  }

  img {
    width: 100%;
    height: auto;
  }
}

h1 {
  @include font-size(22px);
  font-weight: $black;
  letter-spacing: 2px;
  padding-left: calculateRem(32px);
  text-transform: uppercase;

  @include tablet {
    @include font-size($sub_headline);
    padding-left: calculateRem(80px);
  }

  @include desktop {
    @include font-size($headline);
    padding-left: calculateRem(62px);
  }

  @include large-desktop {
    padding-left: calculateRem(80px);
  }
}

ul {
  width: 100%;
  list-style: none;
  margin: 0;
  padding: 0 0 calculateRem(12px) 0;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  @include animation(moveup 800ms linear);

  hr {
    width: calculateRem(16px);
    margin-right: calculateRem(16px);
    margin-bottom: calculateRem(4px);

    @include tablet {
      width: calculateRem(64px);
    }

    @include desktop {
      width: calculateRem(46px);
    }

    @include large-desktop {
      width: calculateRem(64px);
    }
  }

  li {
    color: color(white);
    text-transform: uppercase;
    font-family: $detail-font;
    font-weight: $regular;
    @include font-size($tiny_body);
    line-height: 1.2;
    letter-spacing: 2px;

    @include tablet {
      @include font-size($small_body);
    }

    span {
      display: inline-block;
      padding: 0 calculateRem(4px);
    }

    &:nth-last-child(1) {
      span {
        display: none;
      }
    }
  }
}
</style>
