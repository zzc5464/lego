<template>
    <span >{{ times }} + {{texts}}</span>
</template>

<script>
    module.exports = {
        props: ['time', 'wenben'],
        data: function() {
            return {
                times: this.time + 1,
                texts: this.wenben
            }
        }
    }
</script>

<style scoped>

</style>