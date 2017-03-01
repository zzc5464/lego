<template>
    <div class='_column' :style="styleObj"><slot></slot></div>
</template>

<script>
    module.exports = {
        props: [ 'width', 'align' ],

        data: function() {
            var justifyContent = {
                left    : 'flex-start',
                right   : 'flex-end',
                center  : 'center'
            }

            return {
                styleObj: {
                    width           : this.width + 'rem', 
                    justifyContent  : justifyContent[this.align] || justifyContent['left']
                }
            };
        }
    }
</script>