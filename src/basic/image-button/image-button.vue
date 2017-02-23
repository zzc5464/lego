<template>
    <img :style="obj" :src="src">
    <b-text :style="tobj"><slot></slot></b-text>
</template>

<script>
    module.exports = {
        props: [ 'width', 'height', 'filled', 'position', 'src'],
        data: function () {
            return {
                obj: {
                    width: (this.width || 4) + 'rem' ,
                    height: (this.height || 1.5) + 'rem'
                
                },
                tobj: {
                    position: 'relative',
                    bottom: '10px'

                }
            };
        },
        methods: {
            tapping: function(){
                console.log(typeof(this.position));
                
            }
        }
    }
</script>

<style scoped>
    img {
        border: none;
        padding: 0;
        text-align: center;
        background-color: #f00;
    }
</style>