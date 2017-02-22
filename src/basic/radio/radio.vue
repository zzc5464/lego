<template>
    <span class="_radio"><span>
</template>

<script>
    module.exports = {
        data: function() {
            
        }
    }
</script>

<style scoped>
    ._radio {
        display: inline-block;
        width: 40px;
        height: 40px;
        border: 1px solid #dcdcdc;
        border-radius: 100%;
        background-color: transparent;
    }
    ._radio:after {
        content: '';
        width: 28px;
        height: 28px;
        background-color: #d7ac62;
        border-radius: 50%;
    }
</style>