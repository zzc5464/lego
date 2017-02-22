<template>
    <button type="button">{{ texts }}</button>
</template>

<script>
    module.exports = {
        data: function() {
            return {
                texts: 'button'
            }
        }
    }
</script>

<style scoped>
    button {
        border: 1px solid #dcdcdc;
        background-color: #fff;
        padding: 4px 8px;
        border-radius: 4px;
    }
</style>