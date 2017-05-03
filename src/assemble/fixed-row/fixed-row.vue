<template>
    <s-single-cell :height='dheight' border='true' bgcolor='transparent'></s-single-cell>
</template>

<script>
    module.exports = {
        props: {
            height: {
                default: 0.368421
            }
        },
        data: function (){
            return {
                dheight: this.height
            }
        }
    }
</script>