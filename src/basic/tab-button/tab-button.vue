<template>
    <button @click="tapping" :style="obj" ><slot></slot></button>
</template>

<script>
    module.exports = {
        props: [ 'width', 'height', 'filled', 'position'],
        data: function () {
            return {
                obj: {
                    width: (this.width || 4) + 'rem' ,
                    height: (this.height || 1.5) + 'rem',
                    backgroundColor: this.filled || 'transparent',
                    lineHeight: (this.height || 1.5) + 'rem',
                    borderTopLeftRadius: (this.position.tl || 0) + 'px',
                    borderTopRightRadius: (this.position.tr || 0) + 'px',
                    borderBottomLeftRadius: (this.position.bl || 0) + 'px',
                    borderBottomRightRadius: (this.position.br || 0) + 'px'
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
    button {
        outline: none;
        border: none;
        padding: 0;
        text-align: center;
    }
</style>