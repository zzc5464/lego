<template>
    <input class='_number_field' :class='classObj' :style='styleObj' type='tel' :name='name' :placeholder='placeholder' :maxlength='max' :required='required' v-model='number' v-on:blur='sendMsg' />
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
                number:''
            }
        },
        methods:{
            sendMsg:function(){
                var valMsg = this.validate(this.number);
                bus.$emit('numberMsg',valMsg);
            },
            validate: function (data) {
                var reg = /^\d+$/;
                if (!reg.test(data)) {
                    return '只能输入数字！';
                }
                return '';
            }
        }
    }
</script>