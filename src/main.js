import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, createWebHistory} from "vue-router"
import HomePage from "./Pages/HomePage"
import RepositoryPage from "./Pages/RepositoryPage"
import DetailsPage from "./Pages/DetailsPage"
import ErrorPage from "./Pages/ErrorPage"


const router = createRouter({
    history: createWebHistory(),
    routes: [{
        path: "/",
        name: "HomePage",
        component: HomePage
    },
    {
        path: "/repository",
        name: "RepositoryPage",
        component: RepositoryPage,
        
    },
    {
        path: "/repository/details/:name",
        name: "DetailsPage",
        component: DetailsPage,
        props: true
    },
    {
        path: "/:catchAll(.*)",
        name: "ErrorPage",
        component: ErrorPage,
      },
    
    
]

})


createApp(App).use(router).mount('#app')
