<template>
    <s-single-cell :height='dheight' :border='value2' bgcolor='transparent' class='_justify-center'>
        <b-text size='30' :color='value'><slot></slot></b-text>
    </s-single-cell>
</template>

<script>
    module.exports = {
        props: {
            height: {
                default: 0.368421
            },
            color: {
                type: String,
                default: 'light'
            },
            border: {
                type: String,
                default: 'true'
            }
        },
        data: function (){
            return {
                dheight: this.height,
                value: this.color,
                value2: this.border
            }
        }
    }
</script>
