<template>
    <span @click="tap" :checked="isChecked" class="_checkbox" :class="{_checkbox_active: isChecked}">
          <marked v-show="isChecked" name="check" size="30" color="white"></marked>
    </span>
</template>

<script>
    var child = require('../icon/icon.vue.js');
    module.exports = {
        props: ['checked', 'name', 'size', 'color'],
        data: function() {
            return {
                isChecked: this.checked
            }
        },
        methods: {
            tap: function() {
                // console.log(this.isChecked);
                this.isChecked = !this.isChecked;
            }
        },
        components: {
            'marked': child
        }
    }
</script>