import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue"
import Synopsis from "../pages/Synopsis.vue"
import Character from "../pages/Character.vue"
import Episode from "../pages/Episode.vue"

const routes = [{
    path: "/",
    component: Home,
    name: "Home",
},{
    path: "/Synopsis",
    component: Synopsis,
    name: "Synopsis",
},{
    path: "/Character",
    component: Character,
    name: "Character",
},{
    path: "/Episode",
    component: Episode,
    name: "Episode",
}]

const router = createRouter({
    history: createWebHistory(),
    linkActiveClass: "active",
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return {
                selector: to.hash,
                behavior: 'smooth'
            };
        }
        return { x: 0, y: 0};
    },
    routes,
});

export default router;