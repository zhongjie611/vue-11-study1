import VueRouter from 'vue-router'
import account from './components/accout.vue'
import goodslist from './components/goodslist.vue'
import register from './subComponents/register.vue'
import login from './subComponents/login.vue'

var router = new VueRouter({
    routes: [
        {   path:'/account',
            component:account,
            children:[
                {path:'register',component:register},
                {path:'login',component:login},
            ]
        },
        {path:'/goodslist',component:goodslist}
    ]
})

export default router