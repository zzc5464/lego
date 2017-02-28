<template>
    <input class="_input" type="email" name="" value="email name field" :style="{ fontSize: size + 'px' ,color:c}" placeholder="请输入电子邮箱">
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