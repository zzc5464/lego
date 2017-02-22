<template>
    <input type="email" name="" value="email name field" :style="{ fontSize: size + 'px' ,color:c}" placeholder="请输入电子邮箱">
</template>

<script>
    module.exports = {
        props:['size','c'],
        data: function() {
            return {
                
            };
        }
    }
</script>

<style scoped lang="scss">
    @import '../../sass/lego.scss';

    /*input{
        @extend .f16;
        color:$c6;
    }*/
</style>