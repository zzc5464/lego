<template>
    <input class='_text_field' :class='classObj' :style='styleObj' type='text' name='name' :placeholder='placeholder' :maxlength='max' v-on:blur='validateText' v-model='text'/>
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
                text: this.value
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
            }
        }
    }
</script>