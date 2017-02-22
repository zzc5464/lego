<template>
    <svg :style="obj"  />
</template>

<script>
    module.exports = {
        props: ['width', 'height'],
        data: function () {
            return {
                obj: {
                    width: this.width + 'rem',
                    height: this.height + 'rem'
                }
            };
        }
    }
</script>

<style scoped>
    svg {
        display: block;
        border: 1px solid #f00;
    }
</style>