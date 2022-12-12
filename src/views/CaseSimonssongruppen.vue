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
          During my employment at En appstudio I got the opportunity to create a
          concept for a new graphical profile and website design for a company
          called Simonssongruppen.
          <br /><br />
          Simonssongruppen is a well-known company located in Småland that acts
          as a framework for others. These are some of the main things I wanted
          to represent in the graphical profile.
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

    <!-- LOGO & COLORS -->
    <section class="case-image">
      <div class="image-container margin-bottom">
        <img
          src="@/assets/images/simonssongruppen/sg_logo_components.svg"
          alt="Image of: The components of the logo"
        />
      </div>

      <div class="image-container margin-bottom">
        <img
          src="@/assets/images/simonssongruppen/sg_colors.svg"
          alt="Image of: The color palette"
        />
      </div>

      <div class="image-container column-container">
        <img
          src="@/assets/images/simonssongruppen/sg_logo_white.png"
          alt="Image of: The logo in white"
        />
        <img
          src="@/assets/images/simonssongruppen/sg_logo_black.png"
          alt="Image of: The logo in black"
        />
        <img
          src="@/assets/images/simonssongruppen/sg_logo_blue.svg"
          alt="Image of: The logo in blue"
        />
        <img
          src="@/assets/images/simonssongruppen/sg_logo_copper.svg"
          alt="Image of: The logo in copper"
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

    <!-- TYPOGRAPHY -->
    <section class="case-image">
      <div class="image-container bg-white margin-bottom">
        <img
          src="@/assets/images/simonssongruppen/sg_titles.svg"
          alt="Image of: The title font"
        />
      </div>

      <div class="image-container bg-white">
        <img
          src="@/assets/images/simonssongruppen/sg_text.svg"
          alt="Image of: The text font"
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
  name: "CaseSimonssongruppen",
  components: {
    caseHead,
    caseWorkedWith,
  },
  data: function() {
    return {
      post: {
        title: "Simonssongruppen",
        types: ["graphical profile", "concept"],
        color: "#26DE81",
        image: "simonssongruppen/sg_case_front.svg",
        webImage: "simonssongruppen/sg_web.jpg",
        workedWith: [],
        url: "",
      },
    };
  },
};
</script>
