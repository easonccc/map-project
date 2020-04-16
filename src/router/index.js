import Vue from "vue";
import Router from "vue-router";

import slot from "@/components/slot";
// import visitor from '@/components/visitor'
import car from "@/components/car";
import wifi from "@/components/wifi";
import law from "@/components/law";
import event from "@/components/event";
import event1 from "@/components/event/event1";
import event2 from "@/components/event/event2";

// 引入登录页面
import login from "@/components/login";
// 引入主页面
import home from "@/components/home";
// 引入智能监控
import monitoring from "@/components/monitoring.vue";
// 引入数字广播
import broadcasting from "@/components/broadcasting.vue";
// 引入智能照明
import illumination from "@/components/illumination";
// 引入智能停车
import park from "@/components/park";
// 引入智慧导视
import guide from "@/components/guide";
// 引入大气环境
import environment from "@/components/environment";
// 引入垃圾桶信息
import trash from "@/components/trash";
// 引入井盖信息
import well from "@/components/well";
// 引入防火监测
import fireproofing from "@/components/fireproofing";
// 引入自助报警
import alarm from "@/components/alarm";

// 引入智慧城市
import city from "@/components/city.vue";
// 引入交通信息
import traffic from "@/components/traffic";
// 引入车辆
import vehicle from "@/components/vehicle";
// 引入网络社区
import community from "@/components/community";
// 引入楼宇信息
import building from "@/components/building";
// 引入商户
import shop from "@/components/shop";
// 引入绿化信息
import afforest from "@/components/afforest";
// 引入厕所信息
import toilet from "@/components/toilet";

// 引入系统----疫情监测
import system from "@/components/system.vue";
import epidemic from "@/components/epidemic";
// 引入发布信息
import publish from "@/components/publish";
// 引入巡检执法
import polling from "@/components/polling";
// 引入投诉处理
import complaint from "@/components/complaint";
import emergency from "@/components/emergency";
// 引入视频会议
import videoconferencing from '@/components/videoconferencing'


// 引入智慧文旅模块
import travel from '@/components/travel'
// 引入诚信信息
import credit from '@/components/credit'
// 引入票务模块
import ticket from '@/components/ticket'
// 票务摄像
import ticket_video from '@/components/travel/ticket_video/ticket_video'
// 票务闸机
import zj from '@/components/travel/ticket_zj/ticket_zj'
// 票务中心
import ticketCenter from '@/components/travel/ticket_center/ticket_center'
Vue.use(Router);

export default new Router({
    routes: [{
            path: "/",
            redirect: "/login"
        },
        {
            path: "/login",
            name: "login",
            component: login
        },
        {
            path: "/home",
            name: "home",
            component: home
        },
        {
            path: "/illumination",
            name: "illumination",
            component: illumination
        },
        {
            path: "/environment",
            name: "environment",
            component: environment
        },
        {
            path: "/park",
            name: "park",
            component: park
        },
        {
            path: "/monitoring",
            name: "monitoring",
            component: monitoring
        },
        {
            path: "/broadcasting",
            name: "broadcasting",
            component: broadcasting
        },
        {
            path: "/guide",
            name: "guide",
            component: guide
        },
        {
            path: "/trash",
            name: "trash",
            component: trash
        },
        {
            path: "/emergency",
            name: "emergency",
            component: emergency
        },
        {
            path: "/ticket1",
            name: "ticket_video",
            component: ticket_video
        },
        {
            path: "/ticket2",
            name: "ticket_video",
            component: zj
        },
        {
            path: "/ticket3",
            name: "ticket_video",
            component: ticketCenter
        },
        {
            path: "/well",
            name: "well",
            component: well
        },
        {
            path: "/fireproofing",
            name: "fireproofing",
            component: fireproofing
        },
        {
            path: "/alarm",
            name: "alarm",
            component: alarm
        },
        {
            path: "/slot",
            name: "slot",
            component: slot
        },
        {
            path: "/travel",
            name: "travel",
            component: travel
        },
        {
            path: "/credit",
            name: "credit",
            component: credit
        },
        {
            path: "/ticket",
            name: "ticket",
            component: ticket
        },
        {
            path: "/traffic",
            name: "traffic",
            component: traffic
        },
        {
            path: "/vehicle",
            name: "vehicle",
            component: vehicle
        },
        {
            path: "/epidemic",
            name: "epidemic",
            component: epidemic
        },
        {
            path: "/complaint",
            name: "complaint",
            component: complaint
        },
        {
            path: "/law",
            name: "law",
            component: law
        },
        {
            path: "/videoconferencing",
            name: "videoconferencing",
            component: videoconferencing
        },
        {
            path: "/wifi",
            name: "wifi",
            component: wifi
        },
        {
            path: "/city",
            name: "city",
            component: city
        },
        {
            path: "/publish",
            name: "publish",
            component: publish
        },
        {
            path: "/community",
            name: "community",
            component: community
        },
        {
            path: "/afforest",
            name: "afforest",
            component: afforest
        },
        {
            path: "/shop",
            name: "shop",
            component: shop
        },
        {
            path: "/polling",
            name: "polling",
            component: polling
        },
        {
            path: "/system",
            name: "system",
            component: system
        },
        {
            path: "/car",
            name: "car",
            component: car
        },
        {
            path: "/toilet",
            name: "toilet",
            component: toilet
        },
        {
            path: "/building",
            name: "building",
            component: building
        },
        {
            path: "/event",
            component: event,
            children: [{
                    path: "event1",
                    name: "event1",
                    component: event1
                },
                {
                    path: "event2",
                    name: "event2",
                    component: event2
                }
            ]
        }
    ]
});
