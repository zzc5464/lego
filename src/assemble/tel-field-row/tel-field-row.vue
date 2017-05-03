<template>
    <s-cell height='2.473684' border='true'>
        <s-flex-column></s-flex-column>
        <s-column :width='width.label'>
            <b-text size='30' color='grey'>{{ label }}</b-text>
        </s-column>
        <s-column :width='width.value'>
            <b-tel-field size='30' color='black' clearall='true' :label='label' :placeholder='placeholder' :value='value'></b-tel-field>
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
        data    : function () {
            return {
                width: {
                    label: this.labelwidth,
                    value: 18.02969 - this.labelwidth
                }
            };
        }
    }
</script>