<template>
    <span @click="tap">
        <child-text :style="styleObj" class="_select_text" :class="classObj"><slot></slot></child-text>
        <child-icon name="angle-right-bold" color="light" size="28"></child-icon>
    </span>
</template>

<script>
    var childText = require('../text/text.vue.js');
    var childIcon = require('../icon/icon.vue.js');
    module.exports = {
        props: ['size', 'color','name'],
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
            tap: function(){
                console.log('please !!!')
            }
        },
        components: {
            'child-text': childText,
            'child-icon': childIcon
        }
    }
</script>