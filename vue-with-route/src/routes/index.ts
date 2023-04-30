import Home from '@/pages/Home.vue'
import AboutUs from '@/pages/AboutUs.vue'
import ContactUs from '@/pages/ContactUs.vue'
import { createRouter, createWebHistory } from "vue-router"

const Routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/category/:name",
        name: "CategoryDetail",
        component: AboutUs,
        props: true
    },
    {
        path: "/contact",
        name: "Contact",
        component: ContactUs
    }
]

export const Router = createRouter({
    history: createWebHistory(),
    routes: Routes
});