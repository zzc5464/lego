<template>
    <input class='_email_field' :class='classObj' :style='styleObj' type='email' :name='name'  v-on:blur='sendMsg' v-model='email' :placeholder='placeholder' :required='required' />
</template>
<script>
    var bus = require('../../utils/eventBus');  
    module.exports = {
        props: [ 'name', 'size', 'align', 'placeholder', 'required' ],
        data: function() {
            var obj = {}, list = [];

            this.align 
            && (obj.textAlign = this.align);

            this.size 
            && list.push('_text_size_' + this.size + 'px');

            return {
                classObj: list,
                styleObj: obj,
                email:''
            }
        },        
        methods: {
            isEmail:function (str){ 
                var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/; 
                return reg.test(str); 
            },
            sendMsg: function(){
                var valMsg = !this.isEmail(this.email) ? '邮箱地址不正确!' :'' ;
                bus.$emit('emailMsg',valMsg);
            }
        }
    }
</script>