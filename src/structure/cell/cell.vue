<template>
    <div class='_cell' :style='styleObj'>
        <slot></slot>
    </div>
</template>

<script>
    module.exports = {
        props: [ 'height' ],
        data: function() {
            return {
                styleObj: {
                    height: this.height + 'rem'
                }
            };
        }
    }
</script>