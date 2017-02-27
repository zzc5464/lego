<template>
    <span class="_highlight" :class="classObj"><slot></slot></span>
</template>

<script>
    module.exports = {
        props: [ 'size', 'color' ],

        data: function() {
            var list = [];

            this.color && list.push('_text_color_' + this.color);
            this.size && list.push('_text_size_' + this.size + 'px');

            return obj;
        }
    }
</script>
