<template>
    <div class='_field' :class='status' >
        <input  class='_number_field' 
                :class='classObj' 
                :style='styleObj' 
                type='tel' 
                :name='name' 
                :placeholder='placeholder' 
                :maxlength='max' 
                v-model='number' 
                v-on:blur='sendMsg' />
        <i v-on:mytap="onClearClicked" class="pingan i-round-cross _text_size_34px _text_color_stonegrey"></i>
    </div>
</template>

<script>
    var bus = require('../../utils/eventBus');
    module.exports = {
        props: [ 'name', 'size', 'align', 'max', 'placeholder', 'required','value' ],

        data: function() {
            var obj = {}, list = [];

            this.align 
            && (obj.textAlign = this.align);

            this.size 
            && list.push('_text_size_' + this.size + 'px');

            return {
                classObj: list,
                styleObj: obj,
                number:this.value,
                status  : this.value && (this.value.length === 0 ? '' : 'entering')
            }
        },
        mounted:function() {
            if (this.required && this.required == 'true'){
                var valMsg = this.validateNum(this.value)
                bus.$emit('numberMsg',valMsg);
            }
        },
        methods:{
            sendMsg:function(){
                if(this.required && this.required == 'true'){
                    var valMsg = this.validateNum(this.number);
                    valMsg && console.log(valMsg);
                    bus.$emit('numberMsg',valMsg);
                }
            },
            validateNum: function (data) {
                var reg = /^\d+$/;
                if(!data){
                    return '金额不能为空！'
                }else if (!reg.test(data)) {
                    return '只能输入数字！';
                }
                return '';
            },
            onClearClicked: function(){
                this.number = '';
                this.status = '';
            },

            onInputEvent: function(){
                this.status = this.number.length === 0 ? '': 'entering';
            }
        }
    }
</script>