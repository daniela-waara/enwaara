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
          As a woman and a developer, I have during a time volunteered as an
          educator in the programming course Hello Girl!

          <br /><br />Hello Girl! is a course where you as a girl/woman has the
          opportunity to step into the world of web programming. The course
          started in the autumn of 2018 and has had three events so far. The
          course is created by the educators, all of us are women and have a
          relation to development in some way.

          <br /><br />During the education, we go through the basics in HTML,
          CSS and JavaScript to create a simple website that could be ready to
          publish. The goal is to help women get their eyes open up for
          programming or to even get an interest to work within the IT-business.
          <b>This is our way to fight for equality.</b>

          <br /><br />Some time ago we started looking into creating our brand
          for Hello Girl! While doing so several of us presented different
          ideas, and this was mine.
        </p>
      </div>
    </section>

    <section class="about-wrapper">
      <div class="about-content">
        <h3 v-bind:style="{ color: post.color }">
          <hr
            v-bind:style="{
              color: post.color,
              backgroundColor: post.color,
              borderColor: post.color,
            }"
          />
          Logo & colors
        </h3>
      </div>
    </section>

    <!-- COLORS & LOGO -->
    <section class="case-image">
      <div class="image-container bg-white column-container four-column">
        <img
          src="@/assets/images/hellogirl/hg_logo_green.svg"
          alt="Logo - Green"
        />
        <img
          src="@/assets/images/hellogirl/hg_logo_blue.svg"
          alt="Logo - Blue"
        />
        <img
          src="@/assets/images/hellogirl/hg_logo_orange.svg"
          alt="Logo - Orange"
        />
        <img
          src="@/assets/images/hellogirl/hg_logo_purple.svg"
          alt="Logo - Purple"
        />
      </div>

      <div class="image-container bg-white column-container four-column">
        <img
          src="@/assets/images/hellogirl/hg_color_white.svg"
          alt="Color - White and Black"
        />
        <img
          src="@/assets/images/hellogirl/hg_color_green.svg"
          alt="Color - Green and Blue"
        />
        <img
          src="@/assets/images/hellogirl/hg_color_orange.svg"
          alt="Color - Orange and Yellow"
        />
        <img
          src="@/assets/images/hellogirl/hg_color_purple.svg"
          alt="Color - Purple and Pink"
        />
      </div>
    </section>

    <section class="about-wrapper">
      <div class="about-content">
        <h3 v-bind:style="{ color: post.color }">
          <hr
            v-bind:style="{
              color: post.color,
              backgroundColor: post.color,
              borderColor: post.color,
            }"
          />
          Fonts and typography
        </h3>
      </div>
    </section>

    <!-- FONTS -->
    <section class="case-image">
      <div class="image-container">
        <img src="@/assets/images/hellogirl/hg_font.svg" alt="Logo - Green" />
        <img
          src="@/assets/images/hellogirl/hg_font_sansserif.svg"
          alt="Logo - Blue"
        />
      </div>
    </section>

    <section class="about-wrapper">
      <div class="about-content">
        <h3 v-bind:style="{ color: post.color }">
          <hr
            v-bind:style="{
              color: post.color,
              backgroundColor: post.color,
              borderColor: post.color,
            }"
          />
          Website
        </h3>
      </div>
    </section>

    <!-- WEB -->
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
  name: "CaseHelloGirl",
  components: {
    caseHead,
    caseWorkedWith,
  },
  data() {
    return {
      post: {
        title: "Hello Girl!",
        types: ["graphical profile", "concept"],
        color: "#FD9644",
        image: "hellogirl/hg_case_front.svg",
        url: "",
        webImage: "hellogirl/hg_web.jpg",
        workedWith: [],
      },
    };
  },
};
</script>
