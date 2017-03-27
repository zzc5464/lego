<template>
    <div class="_hammertips">
        <b-icon name="hammer" size="60"></b-icon>
        <slot></slot>
    </div>
</template>

<script>
    module.exports = {
        props: [ 'label', 'rate', 'total'],
        data: function() {
            
            return {
                desc: this.label,
                numerator: parseInt(this.rate),
                denominator: parseInt(this.total)
               
            };
        },
        methods: {
            showChecked: function(){
                var list = document.querySelectorAll('._solid_checkbox');
                
                for(i=0;i<(this.numerator-1);i++){
                    list[i].setAttribute('checked', true);
                }
            }
        }
    }
</script>