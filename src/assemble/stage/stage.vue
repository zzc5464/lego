<template>
    <div class='_stage' >
        <div><slot></slot></div>
        <slot name='desc' ></slot>
    </div>
</template>

<script>
    module.exports = {
        props: [],
        data: function() {
            
            return {
                
            };
        }
    }
</script>