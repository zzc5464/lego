<template>
    <i class='pingan' :class='[ iconName, textColor, fontSize ]' ></i>
</template>

<script>
    module.exports = {
        props: [ 'name', 'size', 'color' ],

        data: function() {
            var obj = {};

            this.name && (obj.iconName = 'i-' + this.name);
            this.color && (obj.textColor = '_text_color_' + this.color);
            this.size && (obj.fontSize = '_text_size_' + this.size + 'px');

            return obj;
        }
        // data: function () {
        //     var colors = {
        //         'black' : '#333',
        //         'grey'  : '#666',
        //         'light' : '#999'
        //     };

        //     return {
        //         iconName: 'i-' + this.name,
        //         styleObj: {
        //             fontSize: this.size + 'rem',
        //             color: colors[this.color]
        //         }
        //     };
        // }
    }
</script>
<!--<style scoped>
    i {
        color: #666;
    }
</style>-->