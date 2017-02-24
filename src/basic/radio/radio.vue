<template>
    <span @click="tap" :class="{active: isChecked}" :checked="isChecked">
    </span>
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
        position: relative;
        display: inline-block;
        width: 40px;
        height: 40px;
        border: 1px solid #dcdcdc;
        border-radius: 50%;
        background-color: transparent;
    }
    .active:after{
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        margin-top: -14px;
        margin-left: -14px;
        width: 28px;
        height: 28px;
        border: none;
        background-color: #d7ac62;
        border-radius: 50%;
    }
</style>