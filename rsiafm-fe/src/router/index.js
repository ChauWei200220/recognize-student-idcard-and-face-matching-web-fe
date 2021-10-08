import Vue from 'vue';
import Router from 'vue-router';
import CardImage from '../components/CardImage';
import Camera from '../components/Camera';
import Stepper from '../components/Stepper';

Vue.use(Router)

const routes = [
    {
        path:'/',
        name: "CardImage",
        component: CardImage,
    },
    {
        path:'/camera',
        component: Camera,
    },
    {
        path:'/stepper',
        component: Stepper,
    }
]

export default new Router(
    {
        routes,
        mode: 'history',
    }
)