<template>
    <input class='_address_field' :class='classObj' :style='styleObj' type='email' :name='name' :placeholder='placeholder' :maxlength='max' :required='required' v-model='address'/>
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
                address: this.value
            }
        },
        mounted:function() {
            if (this.required && this.required == 'true'){
                var valMsg = !this.address ? '文本不能为空':'';
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