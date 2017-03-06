<template>
    <input class='_input' :style='styleObj' :class='classObj' type='tel' name='' :placeholder='placeholder' v-on:blur='sendMsg' v-model='phone' :maxlength= 'max' required='required' >
</template>

<script>
    var bus = require('../../utils/eventBus');
    module.exports = {
        props: [ 'size', 'align', 'max', 'placeholder', 'validate','value' ],
        data: function() {
            var obj = {}, list = [];

            this.align 
            && (obj.textAlign = this.align);

            this.size 
            && list.push('_text_size_' + this.size + 'px');

            return {
                classObj: list,
                styleObj: obj,
                phone:    this.value
            }
        },
        beforeMount:function() {
            var errorMsg = '手机号不能为空！';
            if( this.phone && this.phone.length !== 11){
                errorMsg = "长度应为 11 位！";
            }else if (this.phone && !this.phone.substr(0,2).match(/[1][3-9]/)){
                errorMsg = "格式不正确！";
            }else if(this.phone && !this.phone.match(/[0-9]{11}/)){
                errorMsg = "只能填写数字！";
            }
            bus.$emit('phoneMsg',errorMsg);
        },

        methods: {
            validatePhone:function(){
                var errorMsg = '';
                if(this.phone && this.phone.length !== 11){
                    errorMsg = "长度应为 11 位！";
                }else if (this.phone && !this.phone.substr(0,2).match(/[1][3-9]/)){
                    errorMsg = "格式不正确！";
                }else if(this.phone && !this.phone.match(/[0-9]{11}/)){
                    errorMsg = "只能填写数字！";
                }
                return errorMsg;
            },
            sendMsg: function(){
                if(this.validate && this.validate == 'true'){
                    var valMsg = this.validatePhone();
                    valMsg && alert(valMsg);
                    bus.$emit('phoneMsg',valMsg);
                }
            }
        }
    }
</script>
