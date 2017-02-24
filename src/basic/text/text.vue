<template>
    <span class="_text" :class="[ textColor, fontSize ]"><slot></slot></span>
</template>

<script>
    module.exports = {
        props: [ 'size', 'color' ],

        data: function() {
            var obj = {};

            this.color && (obj.textColor = '_text_color_' + this.color);
            this.size && (obj.fontSize = '_text_size_' + this.size + 'px');

            return obj;
        }
    }
</script>
