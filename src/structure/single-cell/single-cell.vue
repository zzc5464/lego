<template>
    <div class='_single-cell' :class='classObj' :style='styleObj'><slot></slot></div>
</template>

<script>
    module.exports = {
        props: [ 'height', 'border', 'bgcolor', 'align' ],
        data: function() {
            return {
                styleObj: {
                    textAlign: this.align || 'left',
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