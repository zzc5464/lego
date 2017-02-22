<template>
    <input type="tel" name="" value="13234561234" placeholder="请输入预留手机号码">
</template>

<script>
    module.exports = {
        props:['size','c'],
        data: function() {
            return {
            
            };
        },
        methods: function() {

        }
    }
</script>

<style scoped lang="scss">
    @import '../../sass/lego.scss';
    input{
        color:$c6;
        font-size:16px;
    }
</style>