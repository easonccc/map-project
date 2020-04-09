import Vue from 'vue'
import Router from 'vue-router'

import slot from '@/components/slot'
import visitor from '@/components/visitor'
import car from '@/components/car'
import wifi from '@/components/wifi'
import law from '@/components/law'
import event from '@/components/event'
import event1 from '@/components/event/event1'
import event2 from '@/components/event/event2'


// 引入登录页面
import login from '@/components/login'
// 引入主页面
import home from '@/components/home'
// 引入智能监控
import monitoring from '@/components/monitoring.vue'
// 引入数字广播
import broadcasting from '@/components/broadcasting.vue'
// 引入智能照明
import illumination from '@/components/illumination'
// 引入智能停车
import park from '@/components/park'
// 引入智慧导视
import guide from '@/components/guide'
// 引入大气环境
import environment from '@/components/environment'
// 引入垃圾桶信息
import trash from '@/components/trash'
// 引入井盖信息
import well from '@/components/well'
// 引入防火监测
import fireproofing from '@/components/fireproofing'
// 引入自助报警
import alarm from '@/components/alarm'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            redirect: '/login'
        },
        {
            path: '/login',
            name: 'login',
            component: login
        },
        {
            path: '/home',
            name: 'home',
            component: home
        }, {
            path: '/illumination',
            name: 'illumination',
            component: illumination
        },
        {
            path: '/environment',
            name: 'environment',
            component: environment
        },
        {
            path: '/park',
            name: 'park',
            component: park
        },
        {
            path: '/monitoring',
            name: 'monitoring',
            component: monitoring
        },
        {
            path: '/broadcasting',
            name: 'broadcasting',
            component: broadcasting
        },
        {
            path: '/guide',
            name: 'guide',
            component: guide
        },
        {
            path: '/trash',
            name: 'trash',
            component: trash
        },
        {
            path: '/well',
            name: 'well',
            component: well
        },
        {
            path: '/fireproofing',
            name: 'fireproofing',
            component: fireproofing
        },
        {
            path: '/alarm',
            name: 'alarm',
            component: alarm
        },
        {
            path: '/slot',
            name: 'slot',
            component: slot
        },
        {
            path: '/law',
            name: 'law',
            component: law,
        },
        {
            path: '/wifi',
            name: 'wifi',
            component: wifi,
        },
        {
            path: '/car',
            name: 'car',
            component: car
        },
        {
            path: '/event',
            component: event,
            children: [{
                path: 'event1',
                name: 'event1',
                component: event1,
            }, {
                path: 'event2',
                name: 'event2',
                component: event2,
            }]
        },
    ]
})
