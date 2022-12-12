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
          At my first employment, we had breakfast every day at 9. All the
          employees took turns of being responsible for buying and setting up
          breakfast every morning for a whole week. There were times we had a
          hard time knowing who was responsible and how many people were joining
          for breakfast, so we had an idea of creating <b>The breakfast app</b>.
          <br /><br />The idea was to keep all information in one place. The
          employees would have their responsibility to register for breakfast
          each day, add their preferences or allergies, and even add guests in
          case we had client meetings in the morning. <br />The app would
          contain a shopping list, here you had the opportunity to add an item
          in case it was bad, out of or you if had some wishes (with boundaries
          of course). You would also be able to manage your profile, see and
          manage your responsible weeks, and set up notifications so you don't
          forget about them.
        </p>
      </div>
    </section>

    <section class="case-image mosaic">
      <div class="image-container column-container mosaic">
        <div class="column">
          <img
            data-aos="fade-up"
            data-aos-duration="1200"
            src="@/assets/images/breakfastapp/bf_phone_home.png"
            alt="Image of: App"
          />
          <img
            data-aos="fade-up"
            data-aos-duration="1200"
            src="@/assets/images/breakfastapp/bf_phone_register.png"
            alt="Image of: App"
          />
          <img
            data-aos="fade-up"
            data-aos-duration="1200"
            src="@/assets/images/breakfastapp/bf_phone_guests.png"
            alt="Image of: App"
          />
        </div>
        <div class="column">
          <img
            data-aos="fade-up"
            data-aos-duration="1200"
            src="@/assets/images/breakfastapp/bf_phone_shop.png"
            alt="Image of: App"
          />
          <img
            data-aos="fade-up"
            data-aos-duration="1200"
            src="@/assets/images/breakfastapp/bf_phone_edit.png"
            alt="Image of: App"
          />
          <img
            data-aos="fade-up"
            data-aos-duration="1200"
            src="@/assets/images/breakfastapp/bf_phone_allergies.png"
            alt="Image of: App"
          />
        </div>
        <div class="column">
          <img
            data-aos="fade-up"
            data-aos-duration="1200"
            src="@/assets/images/breakfastapp/bf_phone_profile.png"
            alt="Image of: App"
          />
          <img
            data-aos="fade-up"
            data-aos-duration="1200"
            src="@/assets/images/breakfastapp/bf_phone_weeks.png"
            alt="Image of: App"
          />
          <img
            data-aos="fade-up"
            data-aos-duration="1200"
            src="@/assets/images/breakfastapp/bf_phone_notification.png"
            alt="Image of: App"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import caseHead from "@/components/caseHead.vue";

export default {
  name: "Breakfastapp",
  components: {
    caseHead,
  },
  data: function() {
    return {
      post: {
        title: "The breakfast app",
        types: ["ux design", "app", "ios"],
        color: "#FED330",
        image: "breakfastapp/bf_case_front.png",
      },
    };
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/_global.scss";
</style>
