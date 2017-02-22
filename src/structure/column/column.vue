<template>
    <div class='_column' :style="styles">
        <slot></slot>
    </div>
</template>

<script>
    module.exports = {
        props: [ 'width', 'align' ],

        data: function() {
            return {
                styles: {
                    width: this.width + 'rem', 
                    textAlign: this.align | 'left'
                }
            };
            // var data = {
            //     align1: this.align | 'left'
            // };

            // return data;
        }
    }
</script>