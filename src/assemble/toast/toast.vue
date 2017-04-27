<template>
    <div class='_toast' v-if='!toastType'>
        <div class="_toast_container">
            <div class="_toast_message">
                <slot></slot>
            </div>
        </div>
    </div>
    <div class='_top-toast' v-else>
        <slot></slot>
    </div>
</template>

<script>
    module.exports = {
        props: {
            toastType: {
                type: Boolean,
                default: false
            }
        },
        data: function() {

            return {
                
            };
        }
    }
</script>