<template>
    <div class='_stage' >
        <div class='_stageheader'><slot></slot></div>
        <slot name='desc'></slot>
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