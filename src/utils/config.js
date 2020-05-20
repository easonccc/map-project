import axios from 'axios';

import promise from 'es6-promise';
if (!global.Promiss) {
    global.Promiss = promise.polyfill();
}
global.$http = axios;


global.CONFIG = {
    apiIp: 'http://47.92.236.24:8080/', //江永
}
global.METHODS = {
    //获取前n天的年月日;
    getDate: function (n) {
        var myDate = new Date();
        myDate.setDate(myDate.getDate() - n);
        var Y = myDate.getFullYear();
        var M = myDate.getMonth() + 1;
        var D = myDate.getDate();
        var S = Y + (M + 100).toString().slice(-2) + ((D + 100).toString().slice(-2));
        return [Y, M, D, S];
    },

    //获取某年某月最后一天的方法
    getMonthLastDate: function (year, month) {
        var monthLastDate = new Date(new Date(year, month, 1) - 1).getDate();
        return monthLastDate;
    },
    //获取两个日期相隔天数
    getDateBtween(date1, date2) {
        var d1 = new Date(parseInt(date1.slice(0, 4)), parseInt(date1.slice(4, 6)) - 1, parseInt(date1.slice(-2)));
        var d2 = new Date(parseInt(date2.slice(0, 4)), parseInt(date2.slice(4, 6)) - 1, parseInt(date2.slice(-2)));
        var num = Math.abs((d2.getTime() - d1.getTime()) / (1000 * 60 * 60 * 24));
        return num;
    },

    //判断对象为空
    isEmptyObject: function (e) {
        var t;
        for (t in e)
            return !1;
        return !0
    },
    //获取某一天的前n天
    getDateBefore(date, num) {
        date = date.toString();
        let d = new Date(parseInt(date.slice(0, 4)), parseInt(date.slice(4, 6)) - 1, parseInt(date.slice(-2)))
        d.setDate(d.getDate() - num);
        let Y = d.getFullYear();
        let M = d.getMonth() + 1;
        let D = d.getDate();
        let S = Y + (M + 100).toString().slice(-2) + ((D + 100).toString().slice(-2));
        console.log(S);
        return S;
    },

    //获取随机数,保留小数位数
    getRandom(min, max, point = 0) {
        var Range = max * Math.pow(10, point) - min * Math.pow(10, point);
        var Rand = Math.random();
        return (min + Math.round(Rand * Range)) / Math.pow(10, point);
    },

    //获得token
    getToken() {
        let token = localStorage.getItem('token');
        // let now=Date.parse(new Date());
        let now = parseInt(Date.parse(new Date()) / 1000);
        let tokenPass = localStorage.getItem('tokenPass') || 1519484383464;
        console.log(now, tokenPass)
        if (now < tokenPass) {
            console.log(token);
            return token;
        } else {
            window.location.href = 'login.html'
        }
    },
    getTourism() {
        let code;
        if (localStorage.getItem('copyRight')) {
            code = JSON.parse(localStorage.getItem('copyRight')).code || '02';
        }
        let t = [];
        if (code == '01') {
            t = ["吴江", "jiangsu", 'wj']
        } else if (code == '02') {
            t = ["蓬莱", "shandong", 'pl']
        }
        return t;
    },
    getCopyRight() {
        var copyRight = JSON.parse(localStorage.getItem('copyRight'));
        if (copyRight) {
            this.copyRight = copyRight;
            this.init();
        } else {
            let url = `${CONFIG.apiIp}auth/copyright`;
            $http.get(url).then(res => {
                copyRight = res.data;
                this.copyRight = copyRight;
                localStorage.setItem('copyRight', JSON.stringify(copyRight));
                this.init();
            })
        }

    },
    login(callback) {
        axios({
            'method': 'POST',
            'url': `${CONFIG.apiIp}auth/login`,
            'data': {
                username: 'admin',
                password: '123456'
            }
        }).then(res => {
            console.log("config.js 登陆")
            console.log(res.data.data);
            let data = res.data.data;
            let token = data.token;
            localStorage.setItem('token', token);
            localStorage.setItem('userName', data.user.username);
            localStorage.setItem('user', JSON.stringify(data.user));

            //处理菜单列表
            //  let user=res.data.user;
            //  let menu = [];
            //  let screenMenu;
            //  user.menuList.forEach(v => {
            //      user.childList.forEach(v1 => {
            //          if (v.id == v1.parent.id) {
            //              v.childlist.push(v1)
            //          }
            //      })
            //  })
            //  let sreenIndex = 0;
            //  user.menuList.forEach((v, i) => {
            //      if (v.name == "大屏展示") {
            //          sreenIndex = i
            //      } else {
            //          sreenIndex = -1
            //      }
            //  })
            //  if (sreenIndex != -1) {
            //      screenMenu = user.menuList.splice(sreenIndex, 1)
            //  } else {
            //      screenMenu = "undefined"
            //  }
            //  menu = user.menuList;
            //  localStorage.setItem('menu', JSON.stringify(menu));
            //  localStorage.setItem('screenMenu', JSON.stringify(screenMenu[0].childlist));

            //处理token
            let t = JSON.parse(data.time);
            let tokenPass = t.exp;
            localStorage.setItem('tokenPass', tokenPass);
            global.$http = axios.create({
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            })

            var copyRight = JSON.parse(localStorage.getItem('copyRight'));
            if (copyRight) {
                callback()
            } else {
                axios({
                    'method': 'GET',
                    'url': `${CONFIG.apiIp}auth/copyright`,
                }).then(res => {
                    copyRight = res.data.data;
                    localStorage.setItem('copyRight', JSON.stringify(copyRight));
                    callback()
                })
            }
        })
    }

}


global.$http = axios.create({
    headers: { 'Authorization': 'Bearer ' + METHODS.getToken() }
})
