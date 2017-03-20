<template>
    <s-cell min-height='2.473684' border='true'>
        <s-flex-column></s-flex-column>
        <s-column width='4.871795'>
            <b-text size='30' color='grey'>{{ label }}</b-text>
        </s-column>
        <s-column width='13.157895' align='right'>
            <b-select size='30' color='black'><slot></slot></b-select>
        </s-column>
        <s-flex-column></s-flex-column>
    </s-cell>
</template>

<script>
    module.exports = {
        props   : [ 'label' ],
        data    : function () {
            return {};
        }
    }
</script>