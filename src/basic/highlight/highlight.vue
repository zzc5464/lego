<template>
    <span :style="obj"><slot></slot></span>
</template>

<script>
    module.exports = {
        props: [ 'size', 'color' ],

        data: function() {
            var colors = {
                'brown'  : '#b38f47',
                'red' : '#d6654c'
            };

            return {
                obj: {
                    fontSize: this.size + 'rem',
                    color: colors[this.color] || '#d7ac62'
                }
            };
        }
    }
</script>

<style scoped>
span {
    font-weight: normal;
}
</style>