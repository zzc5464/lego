<template>
    <span :style="obj"><slot></slot></span>
</template>

<script>
    module.exports = {
        props: [ 'size', 'color' ],

        data: function() {
            var colors = {
                'black' : '#333',
                'grey'  : '#666',
                'light' : '#999'
            };

            return {
                obj: {
                    fontSize: this.size + 'rem',
                    color: colors[this.color] || '#666'
                }
            };
        }
    }
</script>
