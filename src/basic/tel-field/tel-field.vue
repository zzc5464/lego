<template>
    <div class='_field' :class='status'>
        <input :id='id' :name='name' class='_input' :class='classObj' :style='styleObj' type='tel' maxlength='11' :placeholder='placeholder' v-on:blur='blur' v-on:input='input' v-model='phone'/>
        <i v-on:mytap='clear'></i>
    </div>
</template>

<script>
    var Validate = require('../../utils/validate');

    module.exports = {
        props: [ 
            'align',    'size',     'clearall', 'placeholder', 
            'id',       'name',     'value',    'required',
            'label'
        ],

        data: function() {
            var obj = {}, list = [];

            // 根据参数，计算该控件的文字对齐方向
            this.align && (obj.textAlign = this.align);

            // 根据参数，计算该控件的文字大小
            this.size && list.push(
                '_text_size_' + this.size + 'px');

            return {
                classObj: list,
                styleObj: obj,
                phone   : this.value,
                status  : this.init()
            }
        },

        mounted: function () {
            this.phone = this.value;
        },

        methods: {
            blur: function() {
                var v = new Validate({
                    label    : this.label,
                    rules    : [ 'tel' ],
                    required : this.required === 'true'
                }), emit = this.$emit.bind(this);

                !v.validate(this.phone) && (function () {
                    console.log(v.errors());
                    emit('phoneMsg', v.errors()[0]);
                })();
            },

            clear: function () {
                this.phone  = '';
                this.status = this.update();
            },

            input: function () {
                this.status = this.update();
            },

            init: function () {
                return (this.value && this.value.length > 0 && this.clearall === 'true') ? 'entering' : '';
            },

            update: function () {
                return (this.phone.length > 0 && this.clearall === 'true') ? 'entering' : '';
            }
        }
    }

</script>