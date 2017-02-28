<template>
    <span @click="tap" :checked="isChecked" :class="{active: isChecked}">
    </span>
</template>

<script>
    module.exports = {
        props: ['checked', 'name'],
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