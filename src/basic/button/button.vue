<template>
    <button @click="tapping" :style="obj" ><slot></slot></button>
</template>

<script>
    module.exports = {
        props: [ 'width', 'height', 'filled'],
        data: function () {
            return {
                obj: {
                    width: (this.width || 4) + 'rem' ,
                    height: (this.height || 1.5) + 'rem',
                    backgroundColor: this.filled || 'transparent',
                    lineHeight: (this.height || 1.5) + 'rem'
                }
            };
        },
        methods: {
            tapping: function(){

            }
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