<template>
  <div class="work-item" data-aos="fade-up" data-aos-duration="1600">
    <router-link v-bind:to="url">
      <div class="work-image" v-bind:style="{ backgroundColor: color }">
        <img v-bind:src="require('@/assets/images/' + image)" alt="" />
      </div>

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

      <h2>{{ title }}</h2>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "workItem",
  props: {
    url: String,
    title: String,
    types: Array,
    color: String,
    image: String,
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/_global.scss";

div.work-item {
  width: 100%;
  padding-bottom: calculateRem(120px);

  @include desktop {
    width: calc(50% - 40px);
  }

  a {
    color: color(white);
    text-decoration: none;

    &:hover {
      div.work-image {
        transform: scale(1.05);
        margin-bottom: calculateRem(34px);
      }
    }
  }
}

div.work-image {
  width: 100%;
  margin-bottom: calculateRem(24px);
  @include aspect-ratio(3, 2);
  display: flex;
  align-items: center;
  justify-content: center;
  @include transition(all, 0.2s);

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}

h2 {
  @include font-size(22px);
  font-weight: $bold;
  letter-spacing: 2px;
  padding-left: calculateRem(32px);
  text-transform: uppercase;

  @include tablet {
    @include font-size($sub_headline);
    padding-left: calculateRem(80px);
  }

  @include desktop {
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
