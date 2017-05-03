<template>
    <s-cell min-height='2.473684' border='true'>
        <s-flex-column></s-flex-column>
        <s-multiline :width='width.label' align='left'>
            <b-text size='30' color='light'>{{ label }}</b-text>
        </s-multiline>
        <s-multiline :width='width.value' align='left'>
            <b-text size='30' color='black'><slot></slot></b-text>
        </s-multiline>
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
            labelWidth: {
                type: Number,
                default: 4.871795
            }
        }, 
        data    : function () {
            return {
                width: {
                    label: this.labelWidth,
                    value: 18.02969 - this.labelWidth
                }
            };
        }
    }
</script>