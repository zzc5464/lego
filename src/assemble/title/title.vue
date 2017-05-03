<template>
    <s-cell height='2.263158' border='true' >
        <s-flex-column></s-flex-column>
        <s-column width='12.315789' align='left'>
            <b-text size='34' color='black'>{{ label }}</b-text>
            <b-text size='20' color='light'>{{ subtitle }}</b-text>
        </s-column>
        <s-column width='5.578945' align='right'>
            <b-text size='34' color='black'>{{ comment }}</b-text>
        </s-column>
        <s-flex-column></s-flex-column>
    </s-cell>
</template>

<script>
    module.exports = {
        props: [ 'label', 'subtitle', 'comment' ],
        data: function() {
            return {};
        }
    }
</script>