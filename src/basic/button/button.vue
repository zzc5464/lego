<template>
    <button :id='id' class='_button' :class='classObj' :style='styleObj' :phone-err='phoneErrMsg' :email-err='emailErrMsg' :idcard-err='idcardErrMsg' :number-err='numberErrMsg' v-on:mytap = 'timekeeper' :istapped='tapped'><slot>{{counts}}</slot></button>
</template>

<script>
    var bus = require('../../utils/eventBus');
    module.exports = {
        props: [ 'id','width', 'height', 'size', 'filled', 'tapcolor','validate','second','phonevali','count','emailvali','idcardvali','numbervali','callback'],

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
                phoneErrMsg:'',
                emailErrMsg:'',
                idcardErrMsg:'',
                numberErrMsg:'',
                counts:this.count,
                seconds: this.second,
                tapped:true
            }
        },
        
        beforeMount:function(){
            var self = this;
            if(self.phonevali){
                bus.$on('phoneMsg',function(res){
                    self.phoneErrMsg = res;
                })
            }
            if(self.emailvali){
                bus.$on('emailMsg',function(res){
                    self.emailErrMsg = res;
                })
            }
            if(self.idcardvali){
                bus.$on('idcardMsg',function(res){
                    self.idcardErrMsg = res;
                })
            }
            if(self.numbervali){
                bus.$on('numberMsg',function(res){
                    self.numberErrMsg = res;
                })
            }
        },
        methods:{
            timekeeper:function(){
                var self = this;
                self.classObj.indexOf('_bgcolor_' + self.tapcolor)<0 &&
                self.tapcolor && self.classObj.push('_bgcolor_' + self.tapcolor);
                if(self.count && self.tapped){
                    self.callback();
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
