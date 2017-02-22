<template>
    <div class='_cell' :class='classObj' :style='styleObj'>
        <slot></slot>
    </div>
</template>

<script>
    module.exports = {
        props: [ 'height', 'border', 'bgcolor' ],
        data: function() {
            return {
                styleObj: {
                    height: this.height + 'rem',
                    backgroundColor: this.bgcolor
                },
                classObj: {
                    '_border': this.border === 'true'
                }
            };
        }
    }
</script>