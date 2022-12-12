<template>
  <div id="app">
    <header class="header" :class="{ hiddenNavbar: !showNavbar }">
      <nav class="navbar">
        <router-link to="/">
          <svg
            v-on:click="scrollToTop()"
            x="0px"
            y="0px"
            viewBox="0 0 283.5 198.4"
          >
            <path
              class="st0"
              d="M270.3,15.4h-2.9c-1.3,0-2.2,0.9-2.2,1.9v153l-57-73.7l-3.4-4.4c-0.4-0.5-1.2-0.5-1.7,0l-3.4,4.4l-57,73.8V17.3
                        c0-1-0.9-1.9-2.1-1.9H139l-3.4,4.4L122,37.4c-0.5-0.5-1.1-1.1-1.7-1.6c-7-6.5-15.3-11.5-25-15s-20.1-5.3-31.4-5.3H13.2
                        c-1.1,0-2.1,0.7-2.1,1.9v163.8c0,1,1,1.9,2.1,1.9h50.6c11.3,0,21.7-1.8,31.4-5.3c9.6-3.5,18-8.5,25-15c6.3-5.9,11.5-12.9,15.3-20.9
                        v39.4c0,1,0.9,1.9,2.1,1.9h1.6c1.4,0,2.6-0.5,3.4-1.5l60.5-78.2c0.4-0.5,1.2-0.5,1.7,0l60.5,78.2c0.7,1,2.1,1.5,3.4,1.5h1.6
                        c1.1,0,2.1-0.8,2.1-1.9v-164C272.4,16.3,271.4,15.4,270.3,15.4z M18.1,21.7h45.6c10.3,0,19.8,1.7,28.5,5s16.3,7.9,22.7,13.8
                        c0.9,0.7,1.7,1.6,2.5,2.4L18,171.4L18.1,21.7z M135.4,109.6c0,9.8-1.8,18.8-5.4,27c-3.6,8.2-8.6,15.3-15,21.3
                        c-6.3,6-14,10.6-22.7,13.9c-8.7,3.4-18.3,5-28.5,5H22.6l99.5-128.6c3.2,4.1,5.8,8.6,7.9,13.4c3.6,8.2,5.4,17.3,5.4,26.9V109.6z
                        M135.4,56.8c-2.5-5.2-5.5-9.9-9-14.2l9-11.7V56.8z"
            />
          </svg>
        </router-link>
        <a href="mailto:hi@enwaara.se" class="contact-link"
          >Email<span class="fa-regular fa-paper-plane"></span
        ></a>
      </nav>
    </header>

    <router-view></router-view>

    <footer>
      <div class="footer-wrapper">
        <a
          href="https://www.instagram.com/d.a.waara"
          target="_blank"
          aria-label="Instagram"
        >
          <span class="fa-brands fa-instagram"></span>
        </a>

        <a
          href="https://www.linkedin.com/in/daniela-andersson-waara/"
          target="_blank"
          aria-label="Linkedin"
        >
          <span class="fa-brands fa-linkedin-in"></span>
        </a>

        <a
          href="https://dribbble.com/enwaara"
          target="_blank"
          aria-label="Dribbble"
        >
          <span class="fa-brands fa-dribbble"></span>
        </a>

        <a
          href="https://codepen.io/enwaara/"
          target="_blank"
          aria-label="Codepen"
        >
          <span class="fa-brands fa-codepen"></span>
        </a>
      </div>
    </footer>
  </div>
</template>

<script>
const OFFSET = 60;
export default {
  data() {
    return {
      showNavbar: true,
      lastScrollPosition: 0,
      scrollValue: 0,
    };
  },
  mounted() {
    this.lastScrollPosition = window.pageYOffset;
    window.addEventListener("scroll", this.onScroll);
    const viewportMeta = document.createElement("meta");
    viewportMeta.name = "viewport";
    viewportMeta.content = "width=device-width, initial-scale=1";
    document.head.appendChild(viewportMeta);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
  created() {
    window.addEventListener("scroll", this.handleSCroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleSCroll);
  },
  methods: {
    onScroll() {
      if (window.pageYOffset < 0) {
        return;
      }
      if (Math.abs(window.pageYOffset - this.lastScrollPosition) < OFFSET) {
        return;
      }
      this.showNavbar = window.pageYOffset < this.lastScrollPosition;
      this.lastScrollPosition = window.pageYOffset;
    },
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    handleSCroll() {
      let header = document.querySelector(".header");
      if (window.scrollY > 200 && !header.className.includes("scrollNavbar")) {
        header.classList.add("scrollNavbar");
      } else if (window.scrollY < 200) {
        header.classList.remove("scrollNavbar");
      }
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/_global.scss";
</style>
