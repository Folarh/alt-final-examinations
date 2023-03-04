import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, createWebHistory} from "vue-router"
import HomePage from "./Pages/HomePage"
import RepositoryPage from "./Pages/RepositoryPage"


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
        component: RepositoryPage
    },
    
]

})


createApp(App).use(router).mount('#app')
