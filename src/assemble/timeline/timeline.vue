<template>
    <div class="_timeline" v-html='creatSvg'></div>
</template>

<script>
    module.exports = {
        // props: [ 'length', 'elements'],
        props: {
            lineType: {
                type: String,
                default: '1'
            }
        },
        data: function() {

            var slots = this.$slots.default,
                elems = [], options, children;

            slots.forEach(function (s) {
                options = s.componentOptions;
                if (options && options.propsData) {
                    elems.push({
                        label : options.propsData.label || '',
                        desc  : options.propsData.desc || ''
                    });
                }
            });


            var ele = elems;
            var len = elems.length;
            var x = len == '3' ? '-47' : '-4';

            var temp = '<svg xmlns="http://www.w3.org/2000/svg"  viewBox="'+ x +',0,375,95">\
                        <circle stroke="rgba(239,194,111,.5)" stroke-width="4" fill="#d7ac62" cx="15%" cy="30" r="4"/>\
                        <rect fill="#d7ac62" x="15%" y="30" width="21%" height="0.5"/>\
                        <text x="15%" y="58" text-anchor="middle" font-size="12" fill="#d7ac62">'+ ele[0].label +'</text>\
                        <text x="15%" y="75" text-anchor="middle" font-size="12" fill="#d7ac62">'+ ele[0].desc +'</text>';
            var cx = ["15%","36%","59%","81%"];
            var rx = ["15%","38%","61%"];


            var y = len == '3' ? '180' : '220';
            var ry = len == '3' ? '120' : '180';
            var tempY = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0,0,375,'+ y +'">\
                        <circle stroke="rgba(239,194,111,.5)" stroke-width="4" fill="#d7ac62" cx="2%" cy="30" r="4"/>\
                        <rect x="2%" y="37" fill="#C1C1C1" width="0.5" height="'+ ry +'"/>\
                        <text x="6%" y="35" font-size="15" fill="#d7ac62">'+ ele[0].label +'</text>\
                        <text x="26%" y="35" font-size="11" fill="#d7ac62">'+ ele[0].desc +'</text>';
            var cy = ['30','90','150','210'];
            var ty = ['35','95','155','215'];

            //圆点
            for (var i = 1; i < (len); i++) {
                temp += '<circle stroke="#ffffff" stroke-width="3" fill="#c1c1c1" cx="'+ cx[i]+'" cy="30" r="6"/>';
                tempY += '<circle stroke="#ffffff" stroke-width="3" fill="#c1c1c1" cx="2%" cy="'+ cy[i] +'" r="6"/>';
            }
            //横线
            for (var i = 1; i < (len-1); i++) {
                temp += '<rect fill="#c1c1c1" x="'+rx[i]+'" y="30" width="21%" height="0.5"/>';
            }
            //文字
            for (var i = 1; i < (len); i++) {
                temp += '<text x="'+cx[i]+'" y="58" text-anchor="middle" font-size="12" fill="#999">'+ ele[i].label +'</text>\
                        <text x="'+cx[i]+'" y="75" text-anchor="middle" font-size="12" fill="#999">'+ ele[i].desc +'</text>';

                tempY += '<text x="6%" y="'+ ty[i] +'" font-size="15" fill="#999">'+ ele[i].label +'</text>\
                <text x="26%" y="'+ ty[i] +'" font-size="11" fill="#999">'+ ele[i].desc +'</text>';
            }

            temp += '</svg>';
            tempY +='</svg>';
            return {
                creatSvg: this.lineType == '1' ? temp : tempY
            };
        },
        methods: {
            tapped: function(){
                
            }
        }
    }
</script>