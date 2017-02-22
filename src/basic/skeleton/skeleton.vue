<template>
    <span :style="obj"><slot></slot></span>
</template>

<script>
    module.exports = {
        props: [ 'size', 'bgcolor' ],

        data: function() {
            var colors = {
                'brown'  : '#b38f47',
                'red' : '#d6654c'
            };

            return {
                obj: {
                    fontSize: this.size + 'rem',
                    backgroundColor: colors[this.bgcolor] || '#d7ac62'
                }
            };
        }
    }
</script>

<style scoped>
    span {
        display: inline-block;
        padding: 4px;
        color: #fff;
        border-radius: 4px;
    }
</style>