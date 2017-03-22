<template>
    <!--<div :style='styleObj' class='_timepoint' :class='{_active: isActive}'>
        <slot name='header' ></slot>
        <slot name='datatime' ></slot>
    </div>-->
</template>

<script>
    module.exports = {
        props: ['id', 'width', 'active'],
        data: function() {
            var obj = {};
            this.width && (obj.width = this.width);
            return {
                isActive: this.active,
                styleObj: obj
            };
        }
    }
</script>