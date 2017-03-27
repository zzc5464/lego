<template>
    <div class="_assetheader">
        <h2 name="boldtitle"></h2>
        <h6 name="h6"></h6>
        <h2 name="thintitle"></h2>
    </div>
</template>

<script>
    module.exports = {
        props: [ ],
        data: function() {
            
            return {
                desc: this.label,
                numerator: parseInt(this.rate),
                denominator: parseInt(this.total)
               
            };
        },
        methods: {
            
        }
    }
</script>