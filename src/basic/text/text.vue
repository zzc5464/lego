<template>
    <span :style="obj"><slot></slot></span>
</template>

<script>
    module.exports = {
        props: [ 'size', 'color' ],

        data: function() {
            // var colors = {
            //     'black' : '#333',
            //     'grey'  : '#666',
            //     'light' : '#999'
            // };

            return {
                obj: {
                    fontSize: this.size + 'rem',
                    color: this.color || '#666'
                }
            };
        }
    }
</script>

<style scoped lang="scss">
@import '../../sass/lego.scss';
span {
    font-weight: normal;
}
</style>
