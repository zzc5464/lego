<template>
    <input class='_tel_field' :class='classObj' :style='styleObj' type='tel' :name='name' :placeholder='placeholder' :maxlength='max' :required='required' v-on:blur='sendMsg' v-model='phone' />
</template>

<script>
    var bus = require('../../utils/eventBus');
    module.exports = {
        props: [ 'name', 'size', 'align', 'max', 'placeholder', 'required' ],
        data: function() {
            var obj = {}, list = [];

            this.align 
            && (obj.textAlign = this.align);

            this.size 
            && list.push('_text_size_' + this.size + 'px');

            return {
                classObj: list,
                styleObj: obj,
                phone: ''
            }
        },
        methods: {
            // validatePhonePrefix :function(number){
            //     if (number.indexOf("13") === 0){
            //         return true;
            //     }
            //     if (number.indexOf("14") === 0){
            //         return true;
            //     }
            //     if (number.indexOf("15") === 0){
            //         return true;
            //     }
            //     if (number.indexOf("16") === 0){
            //         return true;
            //     }
            //     if (number.indexOf("17") === 0){
            //         return true;
            //     }
            //     if (number.indexOf("18") === 0){
            //         return true;
            //     }
            //     if (number.indexOf("19") === 0){
            //         return true;
            //     }
            //     return false;
            // },
            validate:function(){
                var errorMsg = '';
                if(this.phone.length !== 11){
                    errorMsg = "长度应为 11 位！";
                }else if (!this.phone.substr(0,2).match(/[1][3-9]/)){
                    errorMsg =  "格式不正确！";
                }else if(!this.phone.match(/[0-9]{11}/)){
                    errorMsg = "只能填写数字！";
                }
                return errorMsg;
            },
            sendMsg: function(){
                valMsg = this.validate();
                bus.$emit('phoneNum',valMsg);
            }
        }
    }
</script>
