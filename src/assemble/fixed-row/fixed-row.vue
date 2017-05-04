<template>
    <s-single-cell :height='dheight' :border='bordeValue' bgcolor='transparent' class='_justify-center'>
        <b-text size='30' :color='colorValue'><slot></slot></b-text>
    </s-single-cell>
</template>

<script>
    module.exports = {
        props: {
            height: {
                type: String,
                default: '0.368421'
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
                colorValue: this.color,
                bordeValue: this.border
            }
        }
    }
</script>
