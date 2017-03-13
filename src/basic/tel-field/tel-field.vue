<template>
    <div class='_field' :class='status'>
        <input :id='id' :name='name' class='_input' :class='classObj' :style='styleObj' type='tel' maxlength='11' :placeholder='placeholder' v-on:blur='blur' v-on:input='input' v-model='phone'/>
        <i class='pingan i-round-cross _text_size_34px _text_color_stonegrey' v-on:mytap='clear'></i>
    </div>
</template>

<script>
    var bus = require('../../utils/eventBus');

    var validate = require('../../utils/validate');

    var validators = {
        tel: require('../../validator/tel.validator'),
        req: require('../../validator/require.validator')
    }

    function update () {
        return (this.phone.length > 0 && this.clearall === 'true') ? 'entering' : '';
    }

    module.exports = {
        props: [ 
            'align',    'size',     'close',    'placeholder', 
            'id',       'name',     'value',    'required',
            'clearall'
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
                var rules = [], errors;

                this.required === 'true' 
                && rules.push(validators.req);

                rules.push(validators.tel);

                errors = validate(this.phone, rules, '手机号码');

                if (errors.length > 0) {
                    console.log(errors);
                    bus.$emit('phoneMsg', errors[0]);
                }
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
