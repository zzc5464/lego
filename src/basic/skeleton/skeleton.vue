<template>
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
    }
</script>