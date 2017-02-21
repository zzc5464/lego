<template>
    <button type="button">{{ texts }}</button>
</template>

<script>
    module.exports = {
        data: function() {
            return {
                texts: 'image button'
            }
        }
    }
</script>

<style scoped>
    button {
        border: none;
        background-color: #fff;
        padding: 4px 8px;
        border-radius: 4px;
    }
</style>