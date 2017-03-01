<template>
    <button :id='id' class='_button' :class='classObj' :style='styleObj' :phone-err='phoneErrMsg' v-on:click='timekeeper' ><slot>{{counts}}</slot></button>
</template>

<script>
    var bus = require('../../utils/eventBus');
    module.exports = {
        props: [ 'id','width', 'height', 'size', 'filled','validate','second','phoneVali','count'],

        data: function () {
            var obj = {}, list = [];

            this.width  && (obj.width  = this.width  + 'rem');
            this.height && (obj.height = this.height + 'rem');

            this.size 
            && list.push('_text_size_' + this.size + 'px');

            this.filled === 'true' 
            && list.push('_button_filled');

            return {
                styleObj: obj,
                classObj: list,
                phoneErrMsg:this.phoneVali,
                counts:this.count,
                seconds: this.second,
                tapped:true
            }
        },
        // mounted函数相当于原生js中的ready函数
        mounted:function(){
            var self = this;
            self.phoneErrMsg='手机号不能为空'
            bus.$on('phoneNum',function(res){
                self.phoneErrMsg = res;
            })
        },
        methods:{
            timekeeper:function(){
                var self = this;
                if(self.count && self.tapped){
                    self.tapped = false;
                    var countdown = setInterval(function(){
                        if(self.seconds == 0){
                            clearInterval(countdown);
                            self.tapped = true;
                            self.counts = '获取验证码';
                        }else{
                            self.seconds--;
                            self.counts = '还剩' + self.seconds + 's';
                        }
                    },1000)
                }
            }
        }
    }
</script>
