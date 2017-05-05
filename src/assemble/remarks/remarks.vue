<template>
    <div class="_hammertips" v-if="type === 'hammer'">
        <b-icon name="hammer" size="60"></b-icon>
        <slot></slot>
    </div>
    <div class="_hammertips-fail" v-else>
        <div class="_hammertips-fail-title">{{type}}</div>
        <slot></slot>
    </div>
</template>

<script>
    module.exports = {
        props: {
            type: {
                type: String,
                default: ''
            }
        },
        data: function () {
            return {};
        }
    }
</script>