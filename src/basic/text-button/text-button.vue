<template>
    <button class='_text_button' :class='classObj' :style='styleObj'><slot></slot></button>
</template>

<script>
    module.exports = {
        props: [ 'width', 'height', 'size' ],

        data: function () {
            
            var obj = {}, list = [];

            this.width  && (obj.width  = this.width  + 'rem');
            this.height && (obj.height = this.height + 'rem');

            this.size && list.push('_text_size_' + this.size + 'px');

            return {
                styleObj: obj,
                classObj: list
            }
        }
    }
</script>