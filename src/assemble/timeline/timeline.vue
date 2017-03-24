<template>
    <div class="_timeline" v-html='creatSvg'>
    </div>
</template>

<script>
    module.exports = {
        props: [ 'length', 'elements'],
        data: function() {
            // var ele = [
            //     {
            //         time: '2016-04-19',
            //         desc: '提交申购'
            //     },
            //     {
            //         time: '2016-04-20',
            //         desc: '审核成功'
            //     },
            //     {
            //         time: '2016-04-21',
            //         desc: '等待结果'
            //     },
            //     {
            //         time: '2016-04-22',
            //         desc: '等待收益'
            //     }
            // ];
            var ele = this.elements;
            var len = ele.length;
            var x = len == '3' ? '-47' : '-4';

            var temp = '<svg xmlns="http://www.w3.org/2000/svg"  viewBox="'+ x +',0,375,95">\
                        <circle stroke="rgba(239,194,111,.5)" stroke-width="4" fill="#d7ac62" cx="15%" cy="30" r="4"/>\
                        <rect fill="#d7ac62" x="15%" y="30" width="21%" height="0.5"/>';
            var cx = ["15%","36%","59%","81%"];
            var rx = ["15%","38%","61%"];
            var tx = [
                {
                    x1: "6%",
                    x2: "9%"
                },
                {
                    x1: "26.5%",
                    x2: "29.5%"
                },
                {
                    x1: "49.8%",
                    x2: "52.8%"
                },
                {
                    x1: "71.5%",
                    x2: "74.5%"
                }];
            //圆点
            for (var i = 1; i < (len); i++) {
                temp += '<circle stroke="#ffffff" stroke-width="3" fill="#c1c1c1" cx="'+ cx[i]+'" cy="30" r="6"/>';
            }
            //横线
            for (var i = 1; i < (len-1); i++) {
                temp += '<rect fill="#c1c1c1" x="'+rx[i]+'" y="30" width="21%" height="0.5"/>';
            }
            //文字
            for (var i = 0; i < (len); i++) {
                temp += '<text x="'+tx[i].x1+'" y="58" font-size="12" fill="#999">'+ ele[i].time +'</text>\
                        <text x="'+tx[i].x2+'" y="75" font-size="12" fill="#999">'+ ele[i].desc +'</text>';
            }

            temp += '</svg>';
            return {
                creatSvg: temp
            };
        },
        methods: {
            tapped: function(){
                
            }
        }
    }
</script>