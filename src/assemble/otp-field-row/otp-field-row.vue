<template>
    <s-cell height='2.473684' border='true' >
        <s-flex-column></s-flex-column>
        <s-column :width='width.label'>
            <b-text size='30' color='grey'>{{ label }}</b-text>
        </s-column>
        <s-column :width='width.value'>
            <b-number-field size='30' color='black' :placeholder='placeholder' :value='value' :label='label'></b-number-field>
        </s-column>
        <s-column :width='width.button' align='right'>
            <b-button size='30' filled='true' width='5.26316' height='1.578947'>获取验证码</b-button>
        </s-column>
        <s-flex-column></s-flex-column>
    </s-cell>
</template>

<script>
    module.exports = {
        props   : {
            label: {
                type: String,
                default: ''
            },
            placeholder: {
                type: String,
                default: ''
            },
            value: {
                type: String,
                default: ''
            },
            labelwidth: {
                type: Number,
                default: 4.871795
            }
        }, 
        data: function () {
            return {
                width: {
                    label: this.labelwidth,
                    value: 18.02969 - 6.368421 - this.labelwidth,
                    button: 6.368421
                }
            };
        }
    }
</script>