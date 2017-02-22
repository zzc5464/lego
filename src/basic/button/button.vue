<template>
    <button :style="obj"><slot></slot></button>
</template>

<script>
    module.exports = {
        props: [ 'width', 'height', 'filled'],
        data: function () {
            return {
                obj: {
                    width: this.width + 'rem',
                    height: this.height + 'rem',
                    backgroundColor: this.filled,
                    lineHeight: this.height + 'rem'
                }
            };
        },
        methods: {
            
        }
    }
</script>

<style scoped>
    button {
        border: none;
        padding: 0;
        border-radius: 4px;
        text-align: center;
    }
</style>