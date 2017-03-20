<template>
    <s-cell min-height='2.473684' border='true'>
        <s-flex-column></s-flex-column>
        <s-multiline width='4.871795' align='left'>
            <b-text size='30' color='light'>{{ label }}</b-text>
        </s-multiline>
        <s-multiline width='13.157895' align='left'>
            <b-text size='30' color='black'><slot></slot></b-text>
        </s-multiline>
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