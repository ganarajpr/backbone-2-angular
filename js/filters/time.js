/**
 * Created with IntelliJ IDEA.
 * User: Ganaraj.Pr
 * Date: 01/10/13
 * Time: 13:35
 * To change this template use File | Settings | File Templates.
 */
angular.module("myApp")
    .filter("time",function() {
        return function time(time) {
                var h, m, s;

                //stupid hack.
                if(time<1300000000) {

                    s = Math.floor(time/1000);
                    m = Math.floor(s/60);
                    h = Math.floor(m/60);
                    m = m%60;
                    s = s%60;

                    return h + ':' + m + ':' + s;
                }

                time = new Date(time);

                h = time.getHours();
                h = h>12? h-12: h;
                h = h==0? 12: h;

                m = time.getMinutes();
                m = m<10? "0" + m: m;

                s = time.getSeconds();
                s = s<10? "0" + s: s;

                return h + ":" + m + ":" +s;
        }
    });