<template>
    <i class='pingan' :class='[iconName]' :style='styleObj'></i>
</template>

<script>
    module.exports = {
        props: [ 'name', 'size', 'color' ],
        data: function () {
            // var colors = {
            //     'black' : '#333',
            //     'grey'  : '#666',
            //     'light' : '#999'
            // };

            return {
                iconName: 'i-' + this.name,
                styleObj: {
                    fontSize: this.size + 'rem',
                    color: this.color
                }
            };
        }
    }
</script>
<style scoped>
    i {
        color: #666;
    }
</style>