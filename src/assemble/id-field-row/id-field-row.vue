<template>
    <s-cell height='2.473684' border='true'>
        <s-flex-column></s-flex-column>
        <s-column width='4.871795'>
            <b-text size='30' color='grey'>{{ label }}</b-text>
        </s-column>
        <s-column width='13.157895'>
            <b-idcard-field size='30' color='black' clearall='true' :label='label' :placeholder='placeholder' :value='value'></b-idcard-field>
        </s-column>
        <s-flex-column></s-flex-column>
    </s-cell>
</template>

<script>
    module.exports = {
        props   : [ 'label', 'placeholder', 'value' ],
        data    : function () {
            return {};
        }
    }
</script>