<template>
    <span v-on:mytap = "tapped" :checked="isChecked" class="_checkbox" :class="{_checkbox_active: isChecked}">
          <marked v-show="isChecked" name="check"color="white"></marked>
    </span>
</template>

<script>
    var child = require('../icon/icon.vue.js');
    module.exports = {
        props: ['checked'],
        data: function() {
            return {
                isChecked: this.checked
            }
        },
        methods: {
            tapped: function() {
                this.isChecked = !this.isChecked;
            }
        },
        components: {
            'marked': child
        }
    }
</script>