<template>
    <input class='_email_field' :class='classObj' :style='styleObj' type='email' :name='name'  v-on:blur='sendMsg' v-model='email' :placeholder='placeholder' />
</template>
<script>
    var bus = require('../../utils/eventBus');  
    module.exports = {
        props: [ 'name', 'size', 'align', 'placeholder', 'validate', 'value'],
        data: function() {
            var obj = {}, list = [];

            this.align 
            && (obj.textAlign = this.align);

            this.size 
            && list.push('_text_size_' + this.size + 'px');

            return {
                classObj: list,
                styleObj: obj,
                email:    this.value
            }
        },    
        mounted:function() {
            if (this.validate && this.validate == 'true'){
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
                if(this.validate && this.validate === 'true'){
                    var valMsg = !this.isEmail(this.email) ? '邮箱地址不正确!' :'' ;
                    if(valMsg){
                        alert(valMsg);
                    }
                    bus.$emit('emailMsg',valMsg);
                }
            }
        }
    }
</script>