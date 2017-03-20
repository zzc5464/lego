<template>
    <span v-on:mytap = 'tapped'>
        <b-text :style="styleObj" class="_select_text" :class="classObj"><slot></slot></b-text>
        <b-icon name="angle-right-bold" color="light" size="28"></b-icon>
    </span>
</template>

<script>
    var childText = require('../text/text.vue.js');
    var childIcon = require('../icon/icon.vue.js');
    module.exports = {
        props: ['size', 'color'],
        data: function() {
            var list = [], obj = {};

            this.size
            && list.push('_text_size_' + this.size + 'px');

            this.color
            && list.push('_text_color_' + this.color);

            return {
                classObj: list,
                styleObj: obj
            };
        },
        methods: {
            tapped: function(){
                console.log('please !!!')
            }
        },
        components: {
            'child-text': childText,
            'child-icon': childIcon
        }
    }
</script>