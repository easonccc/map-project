import Vue from 'vue'
import Router from 'vue-router'

import video from '@/components/video'
import visitor from '@/components/visitor'
import car from '@/components/car'
import wifi from '@/components/wifi'
import law from '@/components/law'
import event from '@/components/event'
import event1 from '@/components/event/event1'
import event2 from '@/components/event/event2'

// 引入智能监控
import monitoring from '@/components/monitoring.vue'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            redirect: '/video'
        },
        {
            path: '/video',
            name: 'video',
            component: video
        },
        {
            path: '/monitoring',
            name: 'monitoring',
            component: monitoring
        },
        {
            path: '/visitor',
            name: 'visitor',
            component: visitor
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
