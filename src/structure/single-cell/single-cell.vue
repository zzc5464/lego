<template>
    <div class='_single-cell' :class='classObj' :style='styleObj'><slot></slot></div>
</template>

<script>
    module.exports = {
        props: [ 'height', 'border', 'bgcolor' ],
        data: function() {
            var list = [];

            this.border === 'true' && list.push('_border');
            this.bgcolor && list.push('_bgcolor_' + this.bgcolor);
            return {
                styleObj: {
                    height: this.height + 'rem'
                },
                classObj: list
            };
        }
    }
</script>