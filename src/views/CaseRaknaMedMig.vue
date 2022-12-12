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
          Together with Region Jönköpings Län, we developed an app using
          Flutter. The app is acting as a tool during a 10-week long education
          for people to get more information about...
          <br /><br />
          During the project my main responsobility was to create the UX & UI
          design. The design needed to be user friendly and clear, since the
          students could be 20 or 60 years old and/or have foreign background
          and main language.
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
  </div>
</template>

<script>
import caseHead from "@/components/caseHead.vue";

export default {
  name: "CaseRaknaMedMig",
  components: {
    caseHead,
  },
  data: function() {
    return {
      post: {
        title: "Räkna med mig!",
        types: ["ux design", "flutter", "app"],
        color: "#FD9644",
        image: "raknamedmig/rmm_case_front.svg",
      },
    };
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/_global.scss";
</style>
