<template>
    <span>{{ text }}</span>
</template>

<script>
    module.exports = {
        data: function() {
            return {
                text: 'skeleton text'
            }
        }
    }
</script>

<style scoped>
    span {
        font-size: 30px;
        color: #f00;
    }
</style>