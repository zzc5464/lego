<template>
    <div class='_field' :class='status' >
        <input  class='_email_field' 
                :class='classObj' 
                :style='styleObj' 
                type='email' 
                :name='name'  
                v-on:blur='sendMsg' 
                v-model='email' 
                :placeholder='placeholder' />
        <i v-on:mytap="onClearClicked" class="pingan i-round-cross _text_size_34px _text_color_stonegrey"></i>
    </div>
</template>
<script>
    var bus = require('../../utils/eventBus');  
    module.exports = {
        props: [ 'name', 'size', 'align', 'placeholder', 'value','required'],
        data: function() {
            var obj = {}, list = [];

            this.align 
            && (obj.textAlign = this.align);

            this.size 
            && list.push('_text_size_' + this.size + 'px');

            return {
                classObj: list,
                styleObj: obj,
                email:    this.value,
                status  : this.value && (this.value.length === 0 ? '' : 'entering')
            }
        },    
        mounted:function() {
            if (this.required && this.required == 'true'){
                var valMsg = '邮箱地址不能为空';
                valMsg = !this.isEmail(this.email) ? '邮箱地址不正确!' :'' ;
                bus.$emit('emailMsg',valMsg);
            }
        },    
        methods: {
            isEmail:function (str){ 
                var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/; 
                return reg.test(str); 
            },
            sendMsg: function(){
                if(this.required && this.required === 'true'){
                    var valMsg = !this.isEmail(this.email) ? '邮箱地址不正确!' :'' ;
                    if(valMsg){
                        alert(valMsg);
                    }
                    bus.$emit('emailMsg',valMsg);
                }
            },
            onClearClicked: function(){
                this.email = '';
                this.status = '';
            },

            onInputEvent: function(){
                this.status = this.email.length === 0 ? '': 'entering';
            }
        }
    }
</script>