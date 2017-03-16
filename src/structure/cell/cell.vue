<template>
    <div class='_cell' :class='classObj' :style='styleObj'>
        <slot></slot>
    </div>
</template>

<script>
    module.exports = {
        props: [ 'height', 'min-height', 'border', 'bgcolor' ],
        data: function() {
            var list = [];

            this.border === 'true' && list.push('_border');
            this.bgcolor && list.push('_bgcolor_' + this.bgcolor);

            return {
                styleObj: this.minHeight ? {
                    minHeight: this.minHeight + 'rem'
                } : {
                    height: (this.height || '2.473684') + 'rem'
                },
                classObj: list
            };
        }
    }
</script>