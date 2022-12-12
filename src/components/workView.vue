<template>
  <div class="work-view">
    <section class="work-wrapper">
      <div class="work-grid">
        <workItem
          v-for="item in items"
          v-bind:key="item.index"
          v-bind:url="item.route"
          v-bind:image="item.image"
          v-bind:title="item.title"
          v-bind:types="item.types"
          v-bind:color="item.color"
        />
      </div>
    </section>
  </div>
</template>

<script>
import workItem from "@/components/workItem.vue";

export default {
  name: "workView",
  components: {
    workItem,
  },
  data() {
    return {
      items: [
        {
          title: "Avantime",
          types: ["web", "development", "wordpress", "wcag"],
          color: "#A55EEA",
          route: "/avantime",
          image: "avantime/at_case_front.png",
        },
        {
          title: "HR Strateg",
          types: ["web", "development", "wordpress"],
          color: "#FC5C65",
          route: "/hr-strateg",
          image: "hrstrateg/hr_case_front.png",
        },
        {
          title: "The breakfast app",
          types: ["ux design", "app", "ios"],
          color: "#FED330",
          route: "/breakfastapp",
          image: "breakfastapp/bf_case_front.png",
        },
        {
          title: "Simonssongruppen",
          types: ["graphical profile", "concept"],
          color: "#26DE81",
          route: "/simonssongruppen",
          image: "simonssongruppen/sg_case_front.svg",
        },
        {
          title: "Creone",
          types: ["web", "development", "wordpress", "multilanguage"],
          color: "#45AAF2",
          route: "/creone",
          image: "creone/cr_case_front.png",
        },
        {
          title: "Hello Girl!",
          types: ["graphical profile", "concept"],
          color: "#FD9644",
          route: "/hello-girl",
          image: "hellogirl/hg_case_front.svg",
        },
        // {
        //     title: 'Räkna med mig!',
        //     types: ['ux design', 'flutter', 'app'],
        //     color: '#FD9644',
        //     route: '/rakna-med-mig',
        //     image: 'raknamedmig/rmm_case_front.svg'
        // }
      ],
    };
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/_global.scss";

section.work-wrapper {
  min-height: 100vh;
  padding: calculateRem(64px) calculateRem(32px);
}

div.work-grid {
  width: 100%;
  padding-top: calculateRem(120px);
  display: flex;
  flex-flow: column wrap;
  align-items: flex-start;
  justify-content: space-between;

  @include tablet {
    flex-flow: row wrap;
  }
}
</style>
