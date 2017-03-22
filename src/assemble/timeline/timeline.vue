<template>
    <div class="_timeline">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
            <circle stroke='rgba(239,194,111,.5)' stroke-width='4' fill='#d7ac62' cx='15%' cy='19' r='4'/>
            <rect fill="#d7ac62" x="15%" y="19" width="21%" height="0.5"/>
            <circle stroke='#ffffff' stroke-width='3' fill='#c1c1c1' cx='36%' cy='19' r='6'/>
            <rect fill="#c1c1c1" x="38%" y="19" width="21%" height="0.5"/>
            <circle stroke='#ffffff' stroke-width='3' fill='#c1c1c1' cx='59%' cy='19' r='6'/>
            <rect fill="#c1c1c1" x="61%" y="19" width="21%" height="0.5"/>
            <circle stroke='#ffffff' stroke-width='3' fill='#c1c1c1' cx='81%' cy='19' r='6'/>
            <text x="9%" y="40" font-size='12px' fill='red'>提交申购</text>
            <text x="29.5%" y="40" font-size='12px' fill='red'>审核成功</text>
            <text x="52.8%" y="40" font-size='12px' fill='red'>等待结果</text>
            <text x="74.5%" y="40" font-size='12px' fill='red'>完成交易</text>
        </svg>

        <!--<timepoint :active='true' width='25%'>
            <b-text slot='header'>提交申购</b-text>
            <b-text slot='datatime'>2017-01-01</b-text>
        </timepoint>
        <timepoint width='25%'>
            <b-text slot='header'>提交申购</b-text>
            <b-text slot='datatime'>2017-01-02</b-text>
        </timepoint>
        <timepoint width='25%'>
            <b-text slot='header'>提交申购</b-text>
            <b-text slot='datatime'>2017-01-03</b-text>
        </timepoint>
        <timepoint width='25%'>
            <b-text slot='header'>提交申购</b-text>
            <b-text slot='datatime'>2017-01-04</b-text>
        </timepoint>-->
    </div>
</template>

<script>
    module.exports = {
        props: [ 'length'],
        data: function() {
            
            return {
                num: this.length
            };
        },
        watch: {
            
        },
        methods: {
            tapped: function(){
                console.log(this.num);
                var children = document.querySelectorAll('li');
                (parseInt(this.num) > children.length) &&  (this.num = 6);
                (parseInt(this.num) < 0) &&  (this.num = 0);
                for(i=0;i<=(this.num-1);i++){
                    children[i].innerHTML = '&#9679;';
                }
               
            }
        }
    }
</script>