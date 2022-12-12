<template>
  <div class="case" data-aos="fade" data-aos-duration="2000">
    <caseHead
      v-bind:title="post.title"
      v-bind:types="post.types"
      v-bind:color="post.color"
      v-bind:image="post.image"
    ></caseHead>

    <section class="about-wrapper">
      <div class="about-content">
        <p>
          During my employment at Avantime, I got the chance to redo our
          external website. It was developed with a custom-made base theme
          containing Gutenbergs blocks. The blocks could be configured to create
          almost any layout we could be interested in. The site follows the WCAG
          AA 2.0 guidelines for accessibility.
          <br /><br />
          I wanted to create something dynamic so that our creative and
          performance team would be able to create out-of-the box landing pages
          without support from the developers.
        </p>
      </div>
    </section>

    <section class="case-image">
      <div class="image-container bg-white">
        <img
          src="@/assets/images/avantime/at_case_big.png"
          alt="Image of: Responsive layout of Avantime Groups website"
        />
      </div>
    </section>

    <caseWorkedWith
      v-bind:workedWith="post.workedWith"
      v-bind:image="post.webImage"
      v-bind:url="post.url"
    ></caseWorkedWith>
  </div>
</template>

<script>
import caseHead from "@/components/caseHead.vue";
import caseWorkedWith from "@/components/caseWorkedWith.vue";

export default {
  name: "CaseAvantime",
  components: {
    caseHead,
    caseWorkedWith,
  },
  data: function() {
    return {
      post: {
        title: "Avantime",
        types: ["web", "development", "wordpress", "wcag"],
        color: "#A55EEA",
        image: "avantime/at_case_front.png",
        webImage: "avantime/at_web.png",
        workedWith: ["WordPress", "PHP", "HTML 5", "CSS & Sass", "JavaScript"],
        url: "https://avantime.se/",
      },
    };
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/_global.scss";
</style>
