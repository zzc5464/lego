<template>
    <transition name='fade' >
        <modalup class='_modalup' v-if="show">
            <slot>是的发送到发送的</slot>
        </modalup>
    </transition>
</template>
<script>
module.exports = {
    props: {
            show: {
                type: Boolean,
                default: false
            }
        },

        data: function () {
            
            
        },

        methods: {

        }
}
</script>

