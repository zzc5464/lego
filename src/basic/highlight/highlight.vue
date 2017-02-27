<template>
    <!--<span :style="obj"><slot></slot></span>-->
    <span class="_highlight" :class="[ textColor, fontSize ]"><slot></slot></span>
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

        // data: function() {
        //     var colors = {
        //         'brown'  : '#b38f47',
        //         'red' : '#d6654c'
        //     };

        //     return {
        //         obj: {
        //             fontSize: this.size + 'rem',
        //             color: colors[this.color] || '#d7ac62'
        //         }
        //     };
        // }
    }
</script>
