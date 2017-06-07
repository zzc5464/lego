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

            var temp = '<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="'+ x +',0,375,95"><g>\
                        <circle stroke="rgba(239,194,111,.5)" stroke-width="4" fill="#d7ac62" cx="15%" cy="30" r="4"/>\
                        <rect fill="#d7ac62" x="15%" y="30" width="21%" height="0.5"/>\
                        <text x="15%" y="58" text-anchor="middle" font-size="0.621579rem" fill="#d7ac62">'+ ele[0].label +'</text>\
                        <text x="15%" y="75" text-anchor="middle" font-size="0.621579rem" fill="#d7ac62">'+ ele[0].desc +'</text>';
            var cx = ["15%","36%","59%","81%"];
            var rx = ["15%","38%","61%"];


            var y = len == '3' ? '180' : '220';
            var ry = len == '3' ? '120' : '180';
            var tempY = '<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="'+ y +'" viewBox="0,0,375,'+ y +'"><g>\
                        <circle stroke="rgba(239,194,111,.5)" stroke-width="4" fill="#d7ac62" cx="2%" cy="30" r="4"/>\
                        <rect x="2%" y="37" fill="#C1C1C1" width="0.5" height="'+ ry +'"/>\
                        <text x="6%" y="35" font-size="0.789474rem" fill="#d7ac62">'+ ele[0].label +'</text>\
                        <text x="26%" y="35" font-size="0.621579rem" fill="#d7ac62">'+ ele[0].desc +'</text>';
            var cy = ['30','90','150','210'];
            var ty = ['35','95','155','215'];

            var tempH = '<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="-4,0,375,95"><g>\
                        <circle stroke="#C1C1C1" stroke-width="4" fill="#C1C1C1" cx="13%" cy="30" r="4"/>\
                        <rect fill="#C1C1C1" x="13%" y="30" width="35%" height="0.5"/>\
                        <text x="13%" y="58" text-anchor="middle" font-size="0.621579rem" fill="#999">'+ ele[0].label +'</text>\
                        <text x="13%" y="75" text-anchor="middle" font-size="0.621579rem" fill="#999">'+ ele[0].desc +'</text>';
            var ch = ["13%","50%","85%","96%"];
            var rh = ["13%","51%","81%"];


            //圆点
            for (var i = 1; i < (len); i++) {
                temp += '<circle stroke="#ffffff" stroke-width="3" fill="#c1c1c1" cx="'+ cx[i]+'" cy="30" r="6"/>';
                tempY += '<circle stroke="#ffffff" stroke-width="3" fill="#c1c1c1" cx="2%" cy="'+ cy[i] +'" r="6"/>';
                tempH += '<circle stroke="#c1c1c1" stroke-width="1" fill="#c1c1c1" cx="'+ ch[i]+'" cy="30" r="6"/>';
            }
            //横线
            for (var i = 1; i < (len-1); i++) {
                temp += '<rect fill="#c1c1c1" x="'+rx[i]+'" y="30" width="21%" height="0.5"/>';
                tempH += '<rect fill="#c1c1c1" x="'+rh[i]+'" y="30" width="35%" height="0.5"/>';
            }
            //文字
            for (var i = 1; i < (len); i++) {
                temp += '<text x="'+cx[i]+'" y="58" text-anchor="middle" font-size="0.621579rem" fill="#999">'+ ele[i].label +'</text>\
                        <text x="'+cx[i]+'" y="75" text-anchor="middle" font-size="0.621579rem" fill="#999">'+ ele[i].desc +'</text>';

                tempY += '<text x="6%" y="'+ ty[i] +'" font-size="0.789474rem" fill="#999">'+ ele[i].label +'</text>\
                <text x="26%" y="'+ ty[i] +'" font-size="11" fill="#999">'+ ele[i].desc +'</text>';

                tempH += '<text x="'+ch[i]+'" y="58" text-anchor="middle" font-size="0.621579rem" fill="#999">'+ ele[i].label +'</text>\
                        <text x="'+ch[i]+'" y="75" text-anchor="middle" font-size="0.621579rem" fill="#999">'+ ele[i].desc +'</text>';
            }

            temp  += '</g></svg>';
            tempY += '</g></svg>';
            tempH += '</g></svg>';
            var svgHtml = '';
            switch(this.lineType)
                {
                case '2':
                    svgHtml = tempY;
                break;
                case '3':
                    svgHtml = tempH;
                break;
                default:
                    svgHtml = temp;
                }
            return {
                creatSvg: svgHtml
            };
        },
        methods: {
            tapped: function(){
                
            }
        }
    }
</script>