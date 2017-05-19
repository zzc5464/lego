<template>
    <s-cell min-height='2.473684' border='true'>
        <s-flex-column></s-flex-column>
        <s-multiline :width='width.label' align='left'>
            <b-text size='30' color='light'>{{ label }}</b-text>
        </s-multiline>
        <s-multiline :width='width.value' :align='align'>
            <b-text size='30' color='black'><slot></slot></b-text>
        </s-multiline>
        <s-flex-column></s-flex-column>
    </s-cell>
</template>

<script>
    var contants = require('../../utils/contants');

    module.exports = {
        props   : {
            label: {
                type: String,
                default: ''
            },
            labelWidth: {
                type: Number,
                default: contants.labelWidth
            }
            ,
            align: {
                type: String,
                default: 'left'
            }
        }, 
        data    : function () {
            return {
                width: {
                    label: this.labelWidth,
                    value: contants.tableWidth - this.labelWidth
                }
            };
        }
    }
</script>