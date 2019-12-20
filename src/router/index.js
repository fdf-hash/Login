import Vue from 'vue'
import Router from 'vue-router'
//总组件
import Index from "../components/Index/Index";
//首页组件
import Home from "../components/home/Home";
//课程组件
import Course from "../components/Course/Course";
//练习组件
import Edit from "../components/Edit/Edit";
//约课组件
import Study from "../components/Study/Study";
//我的组件
import My from "../components/My/My";
// 一对一路由文件
import Oto from "../components/home/oto/onetoone.vue"
// 一对一里面搜索文件
import Serch from "../components/home/oto/serch.vue"
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      children:[
        {
          path:"/home",
          name:"Home",
          component:Home,
        },
        {
          path:"/course",
          name:"Course",
          component:Course,
        },
        {
          path:"/study",
          name:"Study",
          component:Study,
        },
        {
          path:"/edit",
          name:"Edit",
          component:Edit,
        },
        {
          path:"/my",
          name:"My",
          component:My,
        },
        {
          path:"/",
          redirect:"/home"
        }
      ]
    },
    {
      path:"/oto",
      name:"oto",
      component:Oto
    },
    {
      path:"/serch",
      name:"serch",
      component:Serch
    }
  ]
})
