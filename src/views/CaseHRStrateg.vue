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
          Developing a new website for HR Strateg was one of the last projects I
          worked with during my employment at En appstudio. My main
          responsibility during this project was to develop a WordPress theme
          with custom blocks that are used in the Gutenberg block editor.
          <br /><br />It was a fun project to work with and the clients were
          just as engaged as I to reach the end result and launch.
          <br /><br />During the project, we also collaborated with
          <a href="https://www.behance.net/rickardheldemyr" target="_blank"
            >Rickard Heldemyr</a
          >
          who made all of the designs during this project.
        </p>
      </div>
    </section>

    <section class="case-image">
      <div class="image-container bg-white">
        <img
          src="@/assets/images/hrstrateg/hr_case_big.png"
          alt="Image of: Responsive layout of HR Strategs website"
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
  name: "CaseHRStrateg",
  components: {
    caseHead,
    caseWorkedWith,
  },
  data: function() {
    return {
      post: {
        title: "HR Strateg",
        types: ["web", "development", "wordpress"],
        color: "#FC5C65",
        image: "hrstrateg/hr_case_front.png",
        webImage: "hrstrateg/hr_web.png",
        workedWith: ["WordPress", "php", "HTML 5", "CSS & Sass", "JavaScript"],
        url: "https://hrstrateg.se/",
      },
    };
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/_global.scss";
</style>
