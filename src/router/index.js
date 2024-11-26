import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import HRStrateg from "../views/CaseHRStrateg.vue";
import Simonssongruppen from "../views/CaseSimonssongruppen.vue";
import Breakfastapp from "../views/CaseBreakfastapp.vue";
import HelloGirl from "../views/CaseHellogirl.vue";
import Creone from "../views/CaseCreone.vue";
import Avantime from "../views/CaseAvantime.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
        meta: { title: 'Portfolio | Daniela Andersson Waara' }
    },
    {
        path: "/hr-strateg",
        name: "HR Strateg",
        component: HRStrateg,
        meta: { title: 'HR Strateg | Daniela Andersson Waara' }
    },
    {
        path: "/simonssongruppen",
        name: "Concept Simonssongruppen",
        component: Simonssongruppen,
        meta: { title: 'Simonssongruppen | Daniela Andersson Waara' }
    },
    {
        path: "/breakfastapp",
        name: "The breakfast app",
        component: Breakfastapp,
        meta: { title: 'The breakfast app | Daniela Andersson Waara' }
    },
    {
        path: "/hello-girl",
        name: "Hello Girl!",
        component: HelloGirl,
        meta: { title: 'Hello girl! | Daniela Andersson Waara' }
    },
    {
        path: "/creone",
        name: "Creone",
        component: Creone,
        meta: { title: 'Creone | Daniela Andersson Waara' }
    },
    {
        path: "/avantime",
        name: "Avantime",
        component: Avantime,
        meta: { title: 'Avantime | Daniela Andersson Waara' }
    }
];

const router = new VueRouter({
    mode: 'history',
    routes,
    scrollBehavior() {
        return { x: 0, y: 0 };
    },
});

router.beforeEach((to, from, next) => {
    document.title = to.meta.title
    next()
});

export default router;
