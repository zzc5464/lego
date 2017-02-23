<template>
    <span @click="tap" :checked="isChecked">
      <span class="dot" v-show="isChecked" ><marked name="right" size="2" color="#fff"></marked></span>  
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
        position: relative;
        display: inline-block;
        width: 32px;
        height: 32px;
        border: 1px solid #dcdcdc;
        background-color: transparent;
        box-sizing: border-box;
    }
    .dot {
        position: absolute;
        top: 50%;
        left: 50%;
        margin-top: -16px;
        margin-left: -16px;
        width: 32px;
        height: 32px;
        border: none;
        background-color: #d7ac62;
        text-align: center;
        line-height: 32px;
    }
</style>