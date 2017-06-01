<template>
    <s-cell min-height='2.473684' border='true'>
        <s-flex-column></s-flex-column>
        <s-column :width='width.label'>
            <b-text size='30' color='grey'>{{ label }}</b-text>
        </s-column>
        <s-column :width='width.value' align='right'>
            <b-select :size='size' :color='color'><slot></slot></b-select>
        </s-column>
        <s-flex-column></s-flex-column>
    </s-cell>
</template>

<script>
    var contants = require('../../utils/contants');

    module.exports = {
        props: {
            label: {
                type: String
            },
            size: {
                type: String,
                default: '30'
            },
            color: {
                type: String,
                default: 'black'
            },
            labelWidth: {
                type: Number,
                default: contants.labelWidth
            }
        },
        data: function () {
            return {
                width: {
                    label: this.labelWidth,
                    value: contants.tableWidth - this.labelWidth
                }
            };
        }
    }
</script>