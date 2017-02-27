<template>
    <span class='_highlight' :class='classObj'><slot></slot></span>
</template>

<script>
    module.exports = {
        props: [ 'size' ],

        data: function() {

            var list = [];

            this.color
            && list.push('_text_color_' + this.color);

            return {
                classObj: list
            };
        }
    }  
</script>
