<template>
    <div class='_multiline' :style='styleObj'><slot></slot></div>
</template>

<script>
    module.exports = {
        props: [ 'width', 'align' ],

        data: function() {
            var justifyContent = {
                left    : 'flex-start',
                right   : 'flex-end',
                center  : 'center'
            };
            
            var height  = this.$options.parent.minHeight || '0',
                text    = (parseFloat('0.78947') * 1.5) + '',
                padding = (parseFloat(height) - parseFloat(text)) / 2;

            return {
                styleObj: {
                    width           : this.width + 'rem', 
                    paddingTop      : padding + 'rem',
                    paddingBottom   : padding + 'rem',
                    justifyContent  : justifyContent[this.align] || justifyContent['left']
                }
            };
        }
    }
</script>