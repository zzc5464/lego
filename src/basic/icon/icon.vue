<template>
    <i class='pingan' v-on:mytap='tapped' :class='classObj'></i>
</template>

<script>
    module.exports = {
        props: [ 'name', 'size', 'color' ],

        data: function () {

            var list = [];

            this.name
            && list.push('i-' + this.name);

            this.size
            && list.push('_text_size_' + this.size + 'px');

            this.color
            && list.push('_text_color_' + this.color);

            return {
                classObj: list
            };
        },
        methods: {
            tapped: function(){
                this.$emit('tapped');
            }
        }
    }
</script> 