<template>
    <div class='_notetips' v-show='showTips'>
        <b-text size='22'><slot></slot></b-text>
        <b-icon color='coral' size='30' name='cross' v-on:tapped='close' v-show='showCloseIcon'></b-icon>    
    </div>
</template>

<script>
    module.exports = {
        props: {
            closable: {
                type: String,
                default: 'true'
            }
        },
        data: function() {
            return {
                showTips        : true,
                showCloseIcon   : this.closable === 'true'
            };
        },
        methods: {
            close: function () {
                this.showTips = false;
            }
        }
    }
</script>