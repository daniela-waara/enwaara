<template>
  <div class="home">
    <homeView v-bind:mainColor="colors[randColor].name" />
    <workView />
    <contactView />
  </div>
</template>

<script>
import homeView from "@/components/homeView.vue";
import workView from "@/components/workView.vue";
import contactView from "@/components/contactView.vue";

export default {
  name: "Home",
  components: {
    homeView,
    workView,
    contactView,
  },
  data() {
    return {
      colors: [
        { name: "orange", color: "#FD9644" },
        { name: "green", color: "#26DE81" },
        { name: "blue", color: "#45AAF2" },
        { name: "purple", color: "#A55EEA" },
        { name: "yellow", color: "#FED330" },
        { name: "red", color: "#FC5C65" },
      ],
      randColor: 0,
    };
  },
  created() {
    this.randColor = Math.floor(Math.random() * this.colors.length);
    document.documentElement.style.setProperty(
      "--main-color",
      this.colors[this.randColor]["color"]
    );

    let link =
      document.querySelector("link[rel*='icon']") ||
      document.createElement("link");
    link.type = "image/x-icon";
    link.rel = "shortcut icon";
    link.href =
      "/favicon/" + this.colors[this.randColor]["name"] + "/favicon.ico";
    document
      .getElementsByTagName("head")[0]
      .insertBefore(document.querySelector("link"), link);
  },
};
</script>
