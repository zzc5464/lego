<template>
    <div class='_field' :class='status' >
        <input  class='_text_field' 
                :class='classObj' 
                :style='styleObj' 
                type='text' 
                name='name' 
                :placeholder='placeholder' 
                :maxlength='max' 
                v-on:blur='validateText' 
                v-model='text'/>
        <i v-on:mytap="onClearClicked" class="pingan i-round-cross _text_size_34px _text_color_stonegrey"></i>
    </div>
</template>

<script>
    var bus = require('../../utils/eventBus');
    module.exports = {
        props: [ 'name', 'size', 'align', 'max', 'placeholder', 'required','value'],

        data: function() {
            var obj = {}, list = [];

            this.align 
            && (obj.textAlign = this.align);

            this.size 
            && list.push('_text_size_' + this.size + 'px');

            return {
                classObj: list,
                styleObj: obj,
                text: this.value,
                status  : this.value && (this.value.length === 0 ? '' : 'entering')
            }
        },
        mounted:function() {
            if (this.required && this.required == 'true'){
                var valMsg = !this.text ? '文本不能为空':'';
                bus.$emit('textMsg',valMsg);
            }
        },
        methods: {
            validateText:function(){
                if (this.required && this.required == 'true'){
                    var errorMsg = '';
                    if(!this.text){
                        errorMsg = "本文不能为空";
                        console.log(errorMsg);
                    }
                    bus.$emit('textMsg',errorMsg);
                }
            },
            onClearClicked: function(){
                this.text = '';
                this.status = '';
            },

            onInputEvent: function(){
                this.status = this.text.length === 0 ? '': 'entering';
            }
        }
    }
</script>