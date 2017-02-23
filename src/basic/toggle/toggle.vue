<template>
    <span  @click="tap" :checked="isChecked"></span>
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
                // console.log(this.isChecked);
                this.isChecked = !this.isChecked;
                if(this.isChecked) {
                    var ele = document.getElementsByTagName('span')[0];
                    
                }
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
        box-shadow: 0 0 8px #c1c1c1;
        border-radius: 28px;
        position: relative;
    }
    span:after{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 56px;
        height: 56px;
        border-radius: 50%;
        background-color: #fff;
        box-shadow: 0px 2px 9px #c1c1c1 ;
    }
</style>