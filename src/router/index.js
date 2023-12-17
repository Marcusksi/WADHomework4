import { createRouter, createWebHistory } from 'vue-router'
import AllPosts from "../views/AllPosts.vue";
import APost from "../views/APost.vue";
import AddPost from "../views/AddPost.vue";
import SignUp from "../views/SignUp.vue";
import LogIn from "../views/LogIn.vue";
import Contacts from "../views/Contacts.vue";
import auth from "../auth";


const routes = [
    {
        path: "/",
        name: "home",
        component: AllPosts,
        beforeEnter: async(to, from, next) => {
            let authResult = await auth.authenticated();
            if (!authResult) {
                next('/api/login')
            } else {
                next();
            }
        }
    },
    {
        path: "/signup/home",
        name: "signupToHome",
        component: AllPosts,
        beforeEnter: async(to, from, next) => {
            let authResult = await auth.authenticated();
            if (!authResult) {
                next('/api/signup')
            } else {
                next();
            }
        }
    },
    {
        path: "/api/allposts",
        name: "AllPosts",
        component: AllPosts,
    },
    {
        path: "/api/contacts",
        name: "Contacts",
        component: Contacts,
    },
    {
        path: "/api/apost/:id",
        name: "APost",
        component: APost,
    },
    {
        path: "/api/addpost",
        name: "AddPost",
        component: AddPost,
    },
    {
        path: "/api/signup",
        name: "SignUp",
        component: SignUp,
    },
    {
        path: "/api/login",
        name: "LogIn",
        component: LogIn,
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})



export default router