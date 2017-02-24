<template>
    <span>
        <child-text></child-text>
        <child-icon :class="[iconName]"></child-icon>
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
                    fontSize: this.size,
                    color: this.color
                }
            }
        },
        methods: {

        },
        components: {
            'child-text': childText,
            'child-icon': childIcon
        }
    }
</script>

<style scoped>
    
</style>