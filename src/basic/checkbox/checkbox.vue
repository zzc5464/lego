<template>
    <span @click="tap" :checked="isChecked" :class="{active: isChecked}">
          <marked class="dot" v-show="!isChecked" name="right" size="1.5" color="#fff"></marked>
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

<style scoped>
    span {
        display: inline-block;
        width: 32px;
        height: 32px;
        border: 1px solid #dcdcdc;
        background-color: transparent;
        box-sizing: border-box;
        text-align: center;
        overflow: hidden;
    }
    span.active {
        border-color: #d7ac62;
        background-color: #d7ac62;
    }
</style>