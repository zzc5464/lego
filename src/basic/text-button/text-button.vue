<template>
    <button class='_text_button' :class='classObj' :style='styleObj'><slot></slot></button>
</template>

<script>
    module.exports = {
        props: [ 'width', 'height' ],

        data: function () {
            
            var obj = {}, list = [];

            this.width  && (obj.width  = this.width  + 'rem');
            this.height && (obj.height = this.height + 'rem');

            return {
                styleObj: obj,
                classObj: list
            }
        }
    }
</script>