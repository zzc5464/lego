<template>
    <span  @click="tap" :class="{active: !isChecked}" :checked="isChecked"></span>
</template>

<script>
    module.exports = {
        props: ['checked'],
        data: function() {
            return {
                isChecked: this.checked
            }
        },
        methods: {
            tap: function() {
                console.log(this.isChecked);
                this.isChecked = !this.isChecked;
            }
        }
    }
</script>

<style scoped>
    span {
        display: inline-block;
        width: 96px;
        height: 56px;
        background-color: #fff;
        border: 1.5px solid #e5e5e5;
        border-radius: 28px;
        position: relative;
    }
    span:after{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: auto;
        width: 56px;
        height: 56px;
        border-radius: 50%;
        background-color: #fff;
        box-shadow: 0px 2px 9px #e5e5e5 ;
    }
    span.active {
        background-color: #d7ac62;
        border-color: #d7ac62;
    }
    span.active:after{
        right: 0;
        left: auto;
    }
</style>