<template>
    <i class='iconfont' :class='[iconName]'><slot></slot></i>
</template>

<script>
    module.exports = {
        props: [ 'name' ],

        data: function () {
            return {
                classObj: {
                    iconName: 'icon-' + this.name
                }
            };
        }
    }
</script>