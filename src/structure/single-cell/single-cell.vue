<template>
    <div class='_single-cell' :class='classObj' :style='styleObj'><slot></slot></div>
</template>

<script>
    module.exports = {
        props: [ 'height', 'border' ],
        data: function() {
            return {
                styleObj: {
                    height: this.height + 'rem'
                },
                classObj: {
                    '_border': this.border === 'true'
                }
            };
        }
    }
</script>