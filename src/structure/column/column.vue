<template>
    <div class='_column' :style="styleObj">
        <slot></slot>
    </div>
</template>

<script>
    module.exports = {
        props: [ 'width', 'align' ],

        data: function() {
            return {
                styleObj: {
                    width: this.width + 'rem', 
                    textAlign: this.align | 'left'
                }
            };
        }
    }
</script>