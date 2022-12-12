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
          During my first employment, my former colleagues and I developed a new
          multilingual WordPress site for the customer Creone. During this
          project, we worked closely with our sister-company Markenvard which
          was responsible for the UI design.
        </p>
      </div>
    </section>

    <section class="case-image">
      <div class="image-container bg-white">
        <img
          src="@/assets/images/creone/cr_case_big.png"
          alt="Image of: Responsive layout of Creone website"
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
  name: "CaseCreone",
  components: {
    caseHead,
    caseWorkedWith,
  },
  data: function() {
    return {
      post: {
        title: "Creone",
        types: ["web", "development", "wordpress"],
        color: "#45AAF2",
        image: "creone/cr_case_front.png",
        webImage: "creone/cr_web.png",
        workedWith: [
          "WordPress",
          "php",
          "HTML 5",
          "CSS & Sass",
          "JavaScript",
          "Multilanguage",
        ],
        url: "https://www.creone.com/",
      },
    };
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/_global.scss";
</style>
