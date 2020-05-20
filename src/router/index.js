import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [{
    path: "/login",
    name: "login",
    component: () => import("@/views/login/index"),
  },
  {
    path: "/nav",
    name: "nav",
    component: () => import("@/views/nav/index"),
  },
  {
    path: "/slot",
    name: "slot",
    component: () => import("@/views/slot/index"),
  },
  {
    path: "/monitoring",
    name: "monitoring",
    component: () => import("@/views/slot/monitoring"),
  },
  {
    path: "/broadcasting",
    name: "broadcasting",
    component: () => import("@/views/slot/broadcasting"),
  },
  {
    path: "/illumination",
    name: "illumination",
    component: () => import("@/views/slot/illumination"),
  },
  {
    path: "/park",
    name: "park",
    component: () => import("@/views/slot/park"),
  },
  {
    path: "/guide",
    name: "guide",
    component: () => import("@/views/slot/guide"),
  },
  {
    path: "/environment",
    name: "environment",
    component: () => import("@/views/slot/environment"),
  },
  {
    path: "/trash",
    name: "trash",
    component: () => import("@/views/slot/trash"),
  },
  {
    path: "/well",
    name: "well",
    component: () => import("@/views/slot/well"),
  },
  {
    path: "/fireproofing",
    name: "fireproofing",
    component: () => import("@/views/slot/fireproofing"),
  },
  {
    path: "/wifi",
    name: "wifi",
    component: () => import("@/views/slot/wifi"),
  },
  {
    path: "/alarm",
    name: "alarm",
    component: () => import("@/views/slot/alarm"),
  },
  // 引入城市
  {
    path: "/city",
    name: "city",
    component: () => import("@/views/city/city"),
  },

  {
    path: "/traffic",
    name: "traffic",
    component: () => import("@/views/city/traffic"),
  },
  {
    path: "/city",
    redirect: "/traffic",
  },
  {
    path: "/vehicle",
    name: "vehicle",
    component: () => import("@/views/city/vehicle"),
  },
  {
    path: "/community",
    name: "community",
    component: () => import("@/views/city/community"),
  },
  {
    path: "/building",
    name: "building",
    component: () => import("@/views/city/building"),
  },
  {
    path: "/shop",
    name: "shop",
    component: () => import("@/views/city/shop"),
  },
  {
    path: "/afforest",
    name: "afforest",
    component: () => import("@/views/city/afforest"),
  },
  {
    path: "/toilet",
    name: "toilet",
    component: () => import("@/views/city/toilet"),
  },
  // 智慧文旅
  {
    path: "/travel",
    name: "travel",
    component: () => import("@/views/travel/travel"),
  },
  {
    path: "/credit",
    name: "credit",
    component: () => import("@/views/travel/credit"),
  },
  {
    path: "/ticket",
    name: "ticket",
    component: () => import("@/views/travel/ticket"),
  },
  {
    path: "/ticket1",
    name: "ticket_video",
    component: () => import("@/components/travel/ticket_video/ticket_video"),
  },
  {
    path: "/ticket2",
    name: "ticket_zj",
    component: () => import("@/components/travel/ticket_zj/ticket_zj"),
  },
  {
    path: "/ticket3",
    name: "ticket_center",
    component: () => import("@/components/travel/ticket_center/ticket_center"),
  },
  // 系统应用
  {
    path: "/system",
    name: "system",
    component: () => import("@/views/system/system"),
  },
  {
    path: "/epidemic",
    name: "epidemic",
    component: () => import("@/views/system/epidemic"),
  },
  {
    path: "/publish",
    name: "publish",
    component: () => import("@/views/system/publish"),
  },
  {
    path: "/polling",
    name: "polling",
    component: () => import("@/views/system/polling"),
  },
  {
    path: "/complaint",
    name: "complaint",
    component: () => import("@/views/system/complaint"),
  },
  {
    path: "/emergency",
    name: "emergency",
    component: () => import("@/views/system/emergency"),
  },
  {
    path: "/videoconferencing",
    name: "videoconferencing",
    component: () => import("@/views/system/videoconferencing"),
  },


  {
    path: "",
    redirect: "/login",
  },
];

const router = new VueRouter({
  routes,
});

export default router;