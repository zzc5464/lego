<template>
    <button class="_text_button" :style="obj" ><slot></slot></button>
</template>

<script>
    module.exports = {
        props: [ 'width', 'height', 'filled'],
        data: function () {
            return {
                obj: {
                    size: (this.size || .75) + 'rem' ,
                    width: (this.width || 4) + 'rem' ,
                    height: (this.height || 1.5) + 'rem',
                    color: this.color|| '#666',
                    lineHeight: (this.height || 1.5) + 'rem'
                }
            };
        }
    }
</script>