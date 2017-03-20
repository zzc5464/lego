<template>
    <s-cell height='2.263158' border='true' >
        <s-flex-column></s-flex-column>
        <s-column width='16.315789' align='left'>
            <b-text size='34' color='black'>{{ label }}</b-text>
        </s-column>
        <s-column width='1.578945' align='right'>
            <slot></slot>
        </s-column>
        <s-flex-column></s-flex-column>
    </s-cell>
</template>