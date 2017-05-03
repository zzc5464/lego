<template>
    <s-cell min-height='2.473684' border='true'>
        <s-flex-column></s-flex-column>
        <s-column :width='width.label'>
            <b-text size='30' color='grey'>{{ label }}</b-text>
        </s-column>
        <s-column :width='width.value' align='right'>
            <b-select size='size' color='color'><slot></slot></b-select>
        </s-column>
        <s-flex-column></s-flex-column>
    </s-cell>
</template>

<script>
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
                default: 4.871795
            }
        },
        data: function () {
            return {
                width: {
                    label: this.labelWidth,
                    value: 18.02969 - this.labelWidth
                }
            };
        }
    }
</script>