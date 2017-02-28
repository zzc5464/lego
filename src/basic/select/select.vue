<template>
    <span @click="tap">
        <child-text :style="obj" class="_childtext"><slot></slot></child-text>
        <child-icon color="light" name="angle-right-bold"></child-icon>
    </span>
</template>

<script>
    var childText = require('../text/text.vue.js');
    var childIcon = require('../icon/icon.vue.js');
    module.exports = {
        props: ['size', 'color','name'],
        data: function() {
            return {
                iconName: 'i-' + this.name,
                obj: {
                    fontSize: this.size + 'rem',
                    color: this.color
                }
            }
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

<style scoped>
    ._childtext {
        vertical-align: 2px;
    }
</style>