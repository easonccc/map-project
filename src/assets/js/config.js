import axios from 'axios';
window.http = axios;
window.METHODS = {
    //获取前n天的年月日;
    getDate: function(n) {
        var myDate = new Date();
        myDate.setDate(myDate.getDate() - n);
        var Y = myDate.getFullYear();
        var M = myDate.getMonth() + 1;
        var D = myDate.getDate();
        var S = Y + (M + 100).toString().slice(-2) + ((D + 100).toString().slice(-2));
        return [Y, M, D, S];
    },

    //获取某年某月最后一天的方法
    getMonthLastDate: function(year, month) {
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
    isEmptyObject: function(e) {
        var t;
        for (t in e)
            return !1;
        return !0
    },
    //获取某一天的前n天
    getDateBefore(date, num) {
        date=date.toString();
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
    getRandom(min,max,point=0){
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


}
