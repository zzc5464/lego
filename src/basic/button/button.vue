<template>
    <button class='_button' :class='classObj' :style='styleObj'><slot></slot></button>
</template>

<script>
    module.exports = {
        props: [ 'width', 'height', 'filled' ],

        data: function () {
            
            var obj = {}, list = [];

            this.width  && (obj.width  = this.width  + 'rem');
            this.height && (obj.height = this.height + 'rem');

            this.filled === 'true' && list.push('_button_filled');

            return {
                styleObj: obj,
                classObj: list
            }
        }
    }
</script>