<template>
    <div class="_comment _borderbottom1px" v-if="oneline">
        <b-icon name="quote" size="48" color="stonegrey"></b-icon>
        <slot></slot>
    </div>
    <div class="_comment _comment-more _borderbottom1px" v-else>
        <div>
            <b-icon name="quote" size="48" color="stonegrey"></b-icon>
        </div>
        <div>
            <slot></slot>
        </div>
    </div>
</template>

<script>
    module.exports = {
        props: {
            oneline: {
                type: Boolean,
                default: true
            }
        },
        data: function() {

            return {
                
            };
        }
    }
</script>