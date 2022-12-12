<template>
  <div class="contact-view">
    <section class="contact-wrapper">
      <div class="contact-content">
        <img
          data-aos="fade"
          data-aos-duration="1200"
          src="@/assets/images/profile.png"
          alt="Image of: Daniela Andersson Waara"
        />
        <h2 data-aos="fade" data-aos-duration="1200">
          <hr />
          My story
          <hr />
        </h2>

        <div data-aos="fade" data-aos-duration="1200" class="content-columns">
          <div>
            <p>
              My name is Daniela, I was born and raised in Kalix, a small town
              in the north of Sweden. I would describe myself as a happy,
              somewhat introverted, but also a driven person who always strives
              to create high-quality solutions. I create dynamic solutions to
              meet the customer's different needs to control appearance,
              function, and content. I want to create sustainable products to
              solve everyday problems and make it easier for editors and
              end-users.
              <br /><br />
              I have always been interested in photography and illustration, so
              creativity and design have always been a great driving force for
              me. When it was time for my high school studies, I moved to Boden
              where I read the technology program focusing on computer science
              and communication. And it was here somewhere I found my passion
              for programming.
              <br /><br />
            </p>
          </div>

          <div>
            <p>
              After my high school studies, I continued with a three-year study
              in Graphic design & Web development at Jönköping University.
              During this period I got the chance to evolve even more in UI &
              UX.
              <br /><br />
              As a combined designer and developer I have been able to approach
              problems from several aspects to find solutions that work both
              technically and from a user point of view. Since my first job in
              2017 I have developed experience as a WordPress & front-end
              developer and UI & UX designer, a combination that I enjoy working
              with and hope I can continue to contribute within my future
              mission.
              <br /><br />
            </p>

            <p>
              I currently live in Örebro together with my boyfriend and work as
              a front-end developer at
              <a href="https://avantime.se/">Avantime</a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "contactView",
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/_global.scss";

section.contact-wrapper {
  min-height: 100vh;
  padding: calculateRem(80px) calculateRem(32px) calculateRem(120px)
    calculateRem(32px);
  display: flex;
  align-items: center;
  justify-content: center;

  @include desktop {
    padding: calculateRem(120px) calculateRem(32px) calculateRem(240px)
      calculateRem(32px);
  }
}

div.contact-content {
  width: 100%;
  max-width: calculateRem(1200px);
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: center;

  img {
    width: 80%;
    max-width: calculateRem(400px);
    border-radius: 100%;
    margin-bottom: calculateRem(64px);
  }

  h2 {
    @include font-size($label);
    font-weight: $regular;
    font-family: $detail_font;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin: 0 auto;
    text-align: center;
    display: flex;
    align-items: center;
    color: var(--main-color);

    hr {
      width: calculateRem(46px);
      color: var(--main-color);
      background-color: var(--main-color);
      border-color: var(--main-color);

      @include large-phone {
        width: calculateRem(64px);
      }

      &:nth-of-type(1) {
        margin-right: calculateRem(16px);
      }
      &:nth-last-of-type(1) {
        margin-left: calculateRem(16px);
      }
    }
  }
}

div.content-columns {
  display: flex;
  flex-flow: column wrap;
  align-items: stretch;
  justify-content: center;
  padding: calculateRem(64px) 0;

  @include desktop {
    flex-flow: row wrap;
  }

  div {
    flex: 1;

    @include tablet {
      max-width: calculateRem(600px);
    }

    @include desktop {
      max-width: 100%;
      padding: 0 calculateRem(24px);
    }
  }
}
</style>
