<template>
    <svg :style="obj"  />
</template>

<script>
    module.exports = {
        props: ['width', 'height'],
        data: function () {
            return {
                obj: {
                    width: this.width + 'rem',
                    height: this.height + 'rem'
                }
            };
        }
    }
</script>

<style scoped lang="scss">
@import '../../sass/svg.scss';
    svg {
        display: block;
        /*background-image: $img-border-btm;*/
        background-repeat: no-repeat;
        background-position: center center;
        background-size: 100% auto;
    }
</style>