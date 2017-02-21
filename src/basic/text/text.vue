<template>
    <div>
        <h1>{{times}}</h1>
        <h2>{{texts}}</h2>
    </div>
</template>

<script>
    module.exports = {
        props:['time','wenben'],
        data: function () {
            return {
                times: this.time + 1,
                texts: this.wenben
            }
        }
    }
</script>

<style scoped>

</style>