<template>
    <div class='_flex-column' :style='styleObj'>
        <slot></slot>
    </div>
</template>

<script>
    module.exports = {
        props: [ 'align' ],
        data: function() {
            return {
                styleObj: {
                    textAlign: this.align || 'left'
                }
            };
        }
    }
</script>