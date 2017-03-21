<template>
    <s-cell height="1.736842" v-on:mytap='tapped'>
        <s-column width=".789474" height=".789474" align="left">
        </s-column>
        <s-column width="5.263158" align="left">
            <b-text size="28" color="grey">{{desc}} {{numerator}}/{{denominator}}</b-text>
        </s-column>
        <s-column width=".789474" align="left">
            <b-solid-checkbox width=".526316" height=".526316"></b-solid-checkbox>
        </s-column>
        <s-column width=".789474" align="left">
            <b-solid-checkbox width=".526316" height=".526316"></b-solid-checkbox>
        </s-column>
        <s-column width=".789474" align="left">
            <b-solid-checkbox width=".526316" height=".526316"></b-solid-checkbox>
        </s-column>
        <s-column width=".789474" align="left">
            <b-solid-checkbox width=".526316" height=".526316"></b-solid-checkbox>
        </s-column>
        <s-column width=".789474" align="left">
            <b-solid-checkbox width=".526316" height=".526316"></b-solid-checkbox>
        </s-column>
    </s-cell>
</template>

<script>
    module.exports = {
        props: [ 'label', 'rate', 'total'],
        data: function() {
            
            return {
                desc: this.label,
                numerator: this.rate,
                denominator: this.total
            };
        },
        watch: {
            
        },
        methods: {
            tapped: function(){
                console.log(this.desc);
            }
        }
    }
</script>