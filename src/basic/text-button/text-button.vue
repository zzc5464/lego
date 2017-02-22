<template>
    <button type="button">{{ texts }}</button>
</template>

<script>
    module.exports = {
        data: function() {
            return {
                texts: 'tab button'
            }
        }
    }
</script>

<style scoped>
    button {
        border: 1px solid #dcdcdc;
        background-color: #fff;
        padding: 10px 16px;
        border-radius: 0;
        font-size: 14px;
    }
</style>