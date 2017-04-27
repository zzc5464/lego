<template>
    <div class="_hammertips" v-if="!markType">
        <b-icon name="hammer" size="60"></b-icon>
        <slot></slot>
    </div>
    <div class="_hammertips-fail" v-else>
        <div class="_hammertips-fail-title">失败原因</div>
        <slot></slot>
    </div>
</template>

<script>
    module.exports = {
        props: {
            markType: {
                type: Boolean,
                default: false
            }
        },
        data: function () {
            return {};
        }
    }
</script>