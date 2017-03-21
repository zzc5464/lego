<template>
    <div class='_notetips' v-show='close'>
        <slot></slot>
        <b-icon color='coral' size='30' name='cross' v-on:tapped='clear' v-show='isCross'></b-icon>    
    </div>
</template>

<script>
    module.exports = {
        props: [ 'cross'],
        data: function() {
            return {
                isCross: this.cross,
                close: true
            };
        },
        methods: {
            clear: function(){
                this.close = false;
             
            }
        }
    }
</script>