<template>
    <div class='_field' :class='status'>
        <input  class='_input' 
                :style='styleObj' :class='classObj' 
                type='tel' name='' 
                :placeholder= 'placeholder' 
                v-on:blur   = 'sendMsg' 
                v-on:input  = 'onInputEvent'
                v-model     = 'phone' 
                :maxlength  = 'max' />
        <i v-on:mytap="onClearClicked" class="pingan i-round-cross _text_size_34px _text_color_stonegrey" v-show="close"></i>
    </div>
</template>

<script>
    var bus = require('../../utils/eventBus');
    module.exports = {
        props: [ 'size', 'align', 'max', 'placeholder','value','required', 'close'],
        data: function() {
            var obj = {}, list = [];

            this.align 
            && (obj.textAlign = this.align);

            this.size 
            && list.push('_text_size_' + this.size + 'px');

            return {
                classObj: list,
                styleObj: obj,
                phone   : this.value,
                status  : this.value && (this.value.length === 0 ? '' : 'entering')
            }
        },
        mounted:function() {
            if (this.required && this.required =='true'){
                var errorMsg = '手机号不能为空！';
                if( this.phone && this.phone.length !== 11){
                    errorMsg = "长度应为 11 位！";
                }else if (this.phone && !this.phone.substr(0,2).match(/[1][3-9]/)){
                    errorMsg = "格式不正确！";
                }else if(this.phone && !this.phone.match(/[0-9]{11}/)){
                    errorMsg = "只能填写数字！";
                }
                bus.$emit('phoneMsg',errorMsg);
            }
        },

        methods: {
            validatePhone:function(){
                var errorMsg = '';
                if(this.phone && this.phone.length !== 11){
                    errorMsg = "手机号长度应为 11 位！";
                }else if (this.phone && !this.phone.substr(0,2).match(/[1][3-9]/)){
                    errorMsg = "手机号格式不正确！";
                }else if(this.phone && !this.phone.match(/[0-9]{11}/)){
                    errorMsg = "手机号只能填写数字！";
                }
                return errorMsg;
            },
            sendMsg: function(){
                if(this.required && this.required == 'true'){
                    var valMsg = this.validatePhone();
                    if(valMsg){
                        console.log(valMsg);
                    }
                    bus.$emit('phoneMsg',valMsg);
                }
            },

            onClearClicked: function () {
                this.phone  = '';
                this.status = '';
            },

            onInputEvent: function () {
                this.status = this.phone.length === 0 ? '' : 'entering';
            }
        }
    }
</script>
