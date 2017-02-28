<template>
    <div class='_flex-column' :style='styleObj'>
        <slot></slot>
    </div>
</template>

<script>
    module.exports = {
        props: [ 'align' ],
        data: function() {
            var justifyContent = {
                left    : 'flex-start',
                right   : 'flex-end',
                center  : 'center'
            }

            return {
                styleObj: {
                    justifyContent  : justifyContent[this.align] || 'flex-start'
                }
            };
        }
    }
</script>