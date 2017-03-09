<template>
    <span v-on:mytap = "tapped" class="_radio" :class="{_radio_active: isChecked}" :checked="isChecked">
        <marked class="dot" v-show="isChecked" name="check" size="30" color="white"></marked>
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
            tapped: function() {
                // console.log(this.isChecked);
                this.isChecked = !this.isChecked;
            }
        },
        components: {
            'marked': child
        }
    }
</script>