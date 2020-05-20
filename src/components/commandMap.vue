<template>
  <div class="map">
    <clos></clos>
    <div id="mapBox" class="mapBox"></div>
    <commandList
      v-if="showLeft"
      :device="bindData"
      :title="config.listTitle"
      :itemSelect="modalIndex"
    ></commandList>
    <mapMonitoring
      v-if="config.type === 'jk' && modalShow"
      :deviceOne="bindData[modalIndex]"
      @closeModal="modalHide"
    ></mapMonitoring>
    <mapBroadcasting
      v-if="config.type === 'gb' && modalShow"
      :deviceOne="bindData[modalIndex]"
      @closeModal="modalHide"
    ></mapBroadcasting>
    <mapIllumination
      v-if="config.type === 'ill' && modalShow"
      :deviceOne="bindData[modalIndex]"
      @closeModal="modalHide"
    ></mapIllumination>
    <mapPark
      v-if="config.type === 'park' && modalShow"
      :deviceOne="bindData[modalIndex]"
      @closeModal="modalHide"
    ></mapPark>
    <mapGuide
      v-if="config.type === 'guide' && modalShow"
      :deviceOne="bindData[modalIndex]"
      @closeModal="modalHide"
    ></mapGuide>
    <mapWifi
      v-if="config.type === 'wifi' && modalShow"
      :deviceOne="bindData[modalIndex]"
      @closeModal="modalHide"
    ></mapWifi>
    <mapEnvironment
      v-if="config.type === 'hj' && modalShow"
      :deviceOne="bindData[modalIndex]"
      @closeModal="modalHide"
    ></mapEnvironment>
    <maptrash
      v-if="config.type === 'trash' && modalShow"
      :deviceOne="bindData[modalIndex]"
      @closeModal="modalHide"
    ></maptrash>
    <mapWell
      v-if="config.type === 'well' && modalShow"
      :deviceOne="bindData[modalIndex]"
      @closeModal="modalHide"
    ></mapWell>
    <mapAlarm
      v-if="config.type === 'alarm' && modalShow"
      :deviceOne="bindData[modalIndex]"
      @closeModal="modalHide"
    ></mapAlarm>
    <mapFireproofing
      v-if="config.type === 'fh' && modalShow"
      :deviceOne="bindData[modalIndex]"
      @closeModal="modalHide"
    ></mapFireproofing>
    <v-mapTraffic
      v-if="config.type === 'traffic' && modalShow"
      :deviceOne="bindData[modalIndex]"
      @closeModal="modalHide"
    ></v-mapTraffic>
    <v-mapVehicle
      v-if="config.type === 'car' && modalShow"
      :deviceOne="bindData[modalIndex]"
      @closeModal="modalHide"
    ></v-mapVehicle>
    <v-mapCommunity
      v-if="config.type === 'community' && modalShow"
      :deviceOne="bindData[modalIndex]"
      @closeModal="modalHide"
    ></v-mapCommunity>
    <v-mapToilet
      v-if="config.type === 'cs' && modalShow"
      :deviceOne="bindData[modalIndex]"
      @closeModal="modalHide"
    ></v-mapToilet>
    <v-mapShop
      v-if="config.type === 'shop1' && modalShow"
      :deviceOne="bindData[modalIndex]"
      @closeModal="modalHide"
    >
    </v-mapShop>
    <v-mapAfforest
      v-if="config.type === 'afforest' && modalShow"
      :deviceOne="bindData[modalIndex]"
      @closeModal="modalHide"
    >
    </v-mapAfforest>
    <v-mapToilet
      v-if="config.type === 'toilet' && modalShow"
      :deviceOne="bindData[modalIndex]"
      @closeModal="modalHide"
    >
    </v-mapToilet>
    <v-mapCredit
      v-if="config.type === 'credit' && modalShow"
      :deviceOne="bindData[modalIndex]"
      @closeModal="modalHide"
    >
    </v-mapCredit>

    <v-mapticket
      v-if="config.type === 'mv' && modalShow"
      :deviceOne="bindData[modalIndex]"
      @closeModal="modalHide"
    >
    </v-mapticket>

    <v-mapTicketCenter
      v-if="config.type === 'mc' && modalShow"
      :deviceOne="bindData[modalIndex]"
      @closeModal="modalHide"
    >
    </v-mapTicketCenter>

    <v-mapticket_video
      v-if="config.type === 'mt' && modalShow"
      :deviceOne="bindData[modalIndex]"
      @closeModal="modalHide"
    >
    </v-mapticket_video>

    <v-mapTicketZj
      v-if="config.type === 'mz' && modalShow"
      :deviceOne="bindData[modalIndex]"
      @closeModal="modalHide"
    >
    </v-mapTicketZj>

    <v-mapPublish
      v-if="config.type === 'pub' && modalShow"
      :deviceOne="bindData[modalIndex]"
      @closeModal="modalHide"
    >
    </v-mapPublish>

    <v-mapPolling
      v-if="config.type === 'polling' && modalShow"
      :deviceOne="bindData[modalIndex]"
      @closeModal="modalHide"
    >
    </v-mapPolling>

    <v-mapComplaint
      v-if="config.type === 'complaint' && modalShow"
      :deviceOne="bindData[modalIndex]"
      @closeModal="modalHide"
    >
    </v-mapComplaint>

    <mapBuilding
      v-if="config.type === 'build' && modalShow"
      :deviceOne="bindData[modalIndex]"
      @closeModal="modalHide"
    ></mapBuilding>

    <bottom @childEvent="msgFromChild"></bottom>
  </div>
</template>
<script>
import clos from "../components/close";
import vid from "../assets/img/visual/surveillance2.png";
import jk from "../assets/img/visual/surveillance2.png";
import video2 from "../assets/img/icon/video2.png";
import trash from "../assets/img/visual/trash2.png";
import broad from "../assets/img/icon/广播2.png";
import ill from "../assets/img/icon/ill2.png";
import park from "../assets/img/icon/park2.png";
import guide from "../assets/img/icon/guide2.png";
import wifi from "../assets/img/visual/wifi2.png";
import hj from "../assets/img/visual/环境2.png";
import well from "../assets/img/icon/well2.png";
import alarm from "../assets/img/icon/自助报警2.png";
import fh from "../assets/img/icon/fh2.png";
import traffic from "../assets/img/visual/traffic3.png";
import traf from "../assets/img/visual/traffic2.png";
import car from "../assets/img/icon/car2.png";
import build from "../assets/img/icon/build2.png";
import cs from "../assets/img/icon/cs.png";
import shop1 from "../assets/img/visual/shop1.png";
import afforest from "../assets/img/visual/afforest (2).png";
import toilet from "../assets/img/visual/toilet2.png";
import community from "../assets/img/visual/building1.png";
import commandList from "./commandList";
import gb from "../assets/img/icon/广播2.png";
import pub from "../assets/img/icon/public.png";
import credit from "../assets/img/travel/credit2.png";
import polling from "../assets/img/icon/zf.png";
import complaint from "../assets/img/icon/ts.png";

import mc from "../assets/img/travel/中心2.png";
import mz from "../assets/img/travel/闸机2.png";
import mv from "../assets/img/travel/取票机2.png";
import mt from "../assets/img/travel/监控1.png";

import mapPublish from "../components/system/mapPublish";
import mapPolling from "../components/system/mapPolling";
import mapComplaint from "../components/system/mapComplaint";

// // 引入底部导航栏
import bottom from "./bottom";
import mapSlot from "./slot/mapSlot";
// // 监控组件
import mapMonitoring from "./slot/mapMonitoring";
// // 广播组件
import mapBroadcasting from "./slot/mapBroadcasting";
// // 照明组件
import mapIllumination from "./slot/mapIllumination";
// // 停车场组件
import mapPark from "./slot/mapPark";

import mapCredit from "./travel/mapCredit";
import mapTicketZj from "./travel/ticket_zj/mapTicketZj";
import mapticket_video from "./travel/ticket_video/mapticket_video";
import mapTicketCenter from "./travel/ticket_center/mapTicketCenter";
import mapticket from "./travel/mapticket";
// // 导视组件
import mapGuide from "./slot/mapGuide";
import mapWifi from "./slot/mapWifi";
import mapEnvironment from "./slot/mapEnvironment";
import maptrash from "./slot/maptrash";
import mapWell from "./slot/mapWell";
import mapAlarm from "./slot/mapAlarm";
import mapFireproofing from "./slot/mapFireproofing";
import mapTraffic from "./city/mapTraffic";
import mapVehicle from "./city/mapVehicle";
import mapBuilding from "./city/mapBuilding";
import mapToilet from "./city/mapToilet";
import mapCommunity from "./city/mapCommunity";
import mapShop from "./city/mapShop";
import mapAfforest from "./city/mapAfforest";

import { mapGetters } from "vuex";
export default {
  components: {
    clos,
    // 引入左侧导航
    commandList,
    mapMonitoring,
    bottom,
    mapPark,
    mapBroadcasting,
    mapIllumination,
    mapGuide,
    mapWifi,
    mapEnvironment,
    maptrash,
    mapWell,
    mapAlarm,
    mapFireproofing,
    "v-mapTraffic": mapTraffic,
    "v-mapVehicle": mapVehicle,
    "v-mapCommunity": mapCommunity,
    "v-mapShop": mapShop,
    "v-mapAfforest": mapAfforest,
    "v-mapToilet": mapToilet,
    "v-mapCredit": mapCredit,
    "v-mapticket": mapticket,
    "v-mapTicketCenter": mapTicketCenter,
    "v-mapticket_video": mapticket_video,
    "v-mapTicketZj": mapTicketZj,
    "v-mapPublish": mapPublish,
    "v-mapPolling": mapPolling,
    "v-mapComplaint": mapComplaint,
    mapBuilding,
    mapToilet,
  },
  name: "commmandMap",
  data() {
    return {
      icon: {
        complaint,
        polling,
        mc,
        mt,
        mv,
        mz,
        credit,
        jk,
        gb,
        toilet,
        vid,
        trash: trash,
        video2: video2,
        broad: broad,
        ill,
        park,
        guide,
        wifi,
        hj,
        well,
        fh,
        alarm,
        traffic,
        traf,
        car,
        build,
        cs,
        shop1,
        afforest,
        community,
        pub,
      },
      listTitle: "人员列表",
      modalShow: false, //modal显示隐藏
      modalIndex: null, //设备序号
      map: null, //地图实例
      markers: [], //地图点标注
      showLeft: true, // 是否显示左侧列表
    };
  },
  props: {
    bindData: {
      type: Array,
      default: function(value) {
        return [
          {
            name: "视屏监控1",
            location: [111.343911, 25.273539],
            id: 1,
            code: 1,
            type: "visual",
          },
        ];
      },
    },
    config: {
      type: Object,
      /*  default: function(value) {
                return {
                    name: "video",
                    type: "video",
                    listTitle: "设备列表"
                };
            } */
    },
    msgData: {
      type: Object,
    },
    // bottom的数据
    bottomData: {
      type: Object,
    },
  },
  mounted() {
    this.drawPoint(this.bindData);
  },
  methods: {
    // 隐藏模态框
    modalHide() {
      //移除点的跳跃动画
      // console.log(this.markers[this.modalIndex]);
      let m = this.markers[this.modalIndex];
      m.setAnimation("AMAP_ANIMATION_NONE");
      m.setMap(this.map);
      if (this.modalShow) {
        this.modalShow = false;
        this.modalIndex = null;
      }
    },
    msgFromChild(msg) {
      this.map.setCenter([106.449875, 29.58107]);
      this.markers.forEach((v) => {
        v.setAnimation("AMAP_ANIMATION_NONE");
      });
      this.markers[msg.index].setAnimation("AMAP_ANIMATION_BOUNCE");
      this.markers[msg.index].setMap(this.map);
      this.map.setZoom(16);
      this.modalIndex = msg.index;
      this.modalShow = true;
      console.log("1212121212", modalIndex);
    },

    //绘制地图标点
    drawPoint(device) {
      console.log("1331", device);
      let that = this;
      // 百度地图API功能
      that.map = new AMap.Map("mapBox", {
        // resizeEnable: true,
        center: [106.449875, 29.58107],
        zoom: 16,
        layers: [
          //使用多个图层
          new AMap.TileLayer.Satellite(), // 卫星
          new AMap.TileLayer.RoadNet(), // 路网
        ],
      });
      let jsonData = [];

      for (let i = 0; i < device.length; i++) {
        jsonData.push(device[i].location);
      }
      let markers = [];
      for (let i = 0; i < jsonData.length; i++) {
        let myIcon = new AMap.Icon({
          image: that.icon[device[i].type],
          size: new AMap.Size(40, 40),
          imageSize: new AMap.Size(40, 40),
        });
        let marker = new AMap.Marker({
          icon: myIcon,
          position: [jsonData[i][0], jsonData[i][1]],
          // bubble:true,
          extData: {
            index: i,
            type: device[i].type,
          },
          map: that.map,
        });
        markers.push(marker);
        AMap.event.addListener(marker, "click", _onClick);
        console.log("path", this.$route.path);
        console.log("hhhhh", that.config.type);
        console.log("sdhop1" + device[i].type);
      }
      this.markers = markers;
      //   this.map.setFitView(markers);
      // 商体户模块绘制模态框
      var circle1 = new AMap.Polygon({
        path: [
          [106.44841799797823, 29.586346278861946],
          [106.44942650856783, 29.584834818696706],
          [106.45174393715669, 29.583799175524025],
          [106.46225819649507, 29.576512052341744],
          [106.4583743578415, 29.572089137197406],
          [106.45260224404146, 29.563336046314657],
          [106.44998440804292, 29.56221619317402],
          [106.44552121224214, 29.56561304274767],
          [106.44625077309419, 29.572070474700595],
          [106.44655118050386, 29.576997254871053],
          [106.44642243447115, 29.57755710102709],
          [106.44610056938936, 29.579236620910834],
          [106.4463795191269, 29.580393607241238],
          [106.44453415932466, 29.587540502986563],
        ],
        strokeColor: "#3AB5E9",
        strokeOpacity: 0.3, //线透明度
        strokeWeight: 3, //线粗细度
        fillColor: "#3AB5E9", //填充颜色
        fillOpacity: 0.5, //填充透明度
      });
      if (this.$route.path == "/shop") {
        that.map.add(circle1);
      }
      // 点击图标事件
      function _onClick(e) {
        let p = e.target;
        this.modalShow = true;
        console.log(p.getExtData().index);
        console.log(p);
        // 设置图标跳动
        that.markers.forEach((v) => {
          v.setAnimation("AMAP_ANIMATION_NONE");
        });
        that.map.setZoom(18);
        that.map.setCenter([p.getPosition().lng, p.getPosition().lat]);
        p.setAnimation("AMAP_ANIMATION_BOUNCE");
        that.modalShow = true;
        that.modalIndex = p.getExtData().index;
        console.log(that.modalIndex);
        console.log(device[that.modalIndex]);
        that.config.type = device[that.modalIndex].type;

        var circle = new AMap.Circle({
          center: new AMap.LngLat(
            device[that.modalIndex].location[0],
            device[that.modalIndex].location[1]
          ), // 圆心位置
          radius: 120, //半径
          strokeColor: "#F33", //线颜色
          strokeOpacity: 1, //线透明度
          strokeWeight: 3, //线粗细度
          fillColor: "#ee2200", //填充颜色
          fillOpacity: 0.35, //填充透明度
        });
        if (that.config.type == "community") {
          that.map.add(circle);
        }

        if (that.config.type == "car") {
          var drivingOption = {
            policy: AMap.DrivingPolicy.LEAST_TIME, // 其它policy参数请参考 https://lbs.amap.com/api/javascript-api/reference/route-search#m_DrivingPolicy
            ferry: 1, // 是否可以使用轮渡
            province: "京", // 车牌省份的汉字缩写
          };

          // 构造路线导航类
          var driving = new AMap.Driving(drivingOption);

          // 根据起终点经纬度规划驾车导航路线
          driving.search(
            new AMap.LngLat(106.45178, 29.580431),
            new AMap.LngLat(106.57715, 29.5573),
            function(status, result) {
              // result即是对应的驾车导航信息，相关数据结构文档请参考 https://lbs.amap.com/api/javascript-api/reference/route-search#m_DrivingResult
              if (status === "complete") {
                if (result.routes && result.routes.length) {
                  // 绘制第一条路线，也可以按需求绘制其它几条路线
                  drawRoute(result.routes[0]);
                }
              } else {
                log.error("获取驾车数据失败：" + result);
              }
            }
          );
        }

        if (that.config.type == "polling") {
          var drivingOption2 = {
            policy: AMap.DrivingPolicy.LEAST_TIME, // 其它policy参数请参考 https://lbs.amap.com/api/javascript-api/reference/route-search#m_DrivingPolicy
            ferry: 1, // 是否可以使用轮渡
            province: "京", // 车牌省份的汉字缩写
          };

          // 构造路线导航类
          var driving2 = new AMap.Driving(drivingOption2);

          // 根据起终点经纬度规划驾车导航路线
          driving2.search(
            new AMap.LngLat(
              device[that.modalIndex].location[0],
              device[that.modalIndex].location[1]
            ),
            new AMap.LngLat(106.45078, 29.566431),
            function(status, result) {
              // result即是对应的驾车导航信息，相关数据结构文档请参考 https://lbs.amap.com/api/javascript-api/reference/route-search#m_DrivingResult
              if (status === "complete") {
                if (result.routes && result.routes.length) {
                  // 绘制第一条路线，也可以按需求绘制其它几条路线
                  drawRoute(result.routes[0]);
                }
              } else {
                log.error("获取驾车数据失败：" + result);
              }
            }
          );
        }
        function drawRoute(route) {
          var path = parseRouteToPath(route);

          var startMarker = new AMap.Marker({
            position: path[0],
            icon: "https://webapi.amap.com/theme/v1.3/markers/n/start.png",
            map: that.map,
          });

          var endMarker = new AMap.Marker({
            position: path[path.length - 1],
            icon: "https://webapi.amap.com/theme/v1.3/markers/n/end.png",
            map: that.map,
          });

          var routeLine = new AMap.Polyline({
            path: path,
            isOutline: true,
            outlineColor: "#ffeeee",
            borderWeight: 2,
            strokeWeight: 5,
            strokeColor: "#0091ff",
            lineJoin: "round",
          });

          routeLine.setMap(that.map);

          // 调整视野达到最佳显示区域
          that.map.setFitView([startMarker, endMarker, routeLine]);
        }

        function parseRouteToPath(route) {
          var path = [];

          for (var i = 0, l = route.steps.length; i < l; i++) {
            var step = route.steps[i];

            for (var j = 0, n = step.path.length; j < n; j++) {
              path.push(step.path[j]);
            }
          }

          return path;
        }
      }
    },
  },
};
</script>
<style scoped lang="less">
@import url("../assets/css/mixin.less");
.map {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: relative;
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.1);
  border-radius: 2px;
}

.mapBox {
  width: 100%;
  height: 100%;
  overflow: hidden;
  margin: 0;
  font-family: "微软雅黑";
  .anchorBL {
    display: none;
  }
}

.modal {
  position: absolute;
  z-index: 100;
  top: 150px;
  left: 10%;
  width: 360px;
  min-height: 360px;
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
