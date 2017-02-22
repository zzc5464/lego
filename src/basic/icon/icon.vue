<template>
    <i :class="[firstname, secondname]"><slot></slot></i>
</template>

<script>
    module.exports = {
        props: [ 'name' ],

        data: function() {

            return {
                firstname: 'iconfont',
                secondname: this.name || ''
            };
        }
    }
</script>

<style scoped>
    i {
        display: inline-block;
        font-style: normal;
        font-size: 16x;
        color: #666;
        width: 16px;
        height: 16px;
    }
</style>