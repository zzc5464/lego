<template>
    <div class='_column' :style="{width:width+'rem'}">
        <slot></slot>
    </div>
</template>

<script>
    module.exports = {
        props: [ 'width' ],
        data: function() {
            return {}
        }
    }
</script>