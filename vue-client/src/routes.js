import Login from "./client/login.vue";
import Index from "./client/index.vue";
import Header from "./client/header.vue";
import Bottom from "./client/bottom.vue";

export const routes = [
    { 
        path:'',components:{
            default:Index,
            'header-top':Header,
            'header-bottom':Bottom
        }
    },
    {
        path:'/login',component:Login
    }
]