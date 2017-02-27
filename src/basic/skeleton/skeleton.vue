<template>
    <!--<span :style="obj"><slot></slot></span>-->
    <span class="_skeleton" :class="[ backgroundColor, fontSize ]"><slot></slot></span>
</template>

<script>
    module.exports = {
        props: [ 'size', 'bgcolor' ],

        data: function() {
            var obj = {};

            this.bgcolor && (obj.backgroundColor = '_bgcolor_' + this.bgcolor);
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
        //             backgroundColor: colors[this.bgcolor] || '#d7ac62'
        //         }
        //     };
        // }
    }
</script>

<!--<style scoped>
    span {
        display: inline-block;
        padding: 4px;
        color: #fff;
        border-radius: 4px;
    }
</style>-->