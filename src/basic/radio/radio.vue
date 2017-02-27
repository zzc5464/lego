<template>
    <span class="_radio" @click="tap" :class="{_radio_active: isChecked}" :checked="isChecked">
    </span>
</template>

<script>
    module.exports = {
        props: ['checked'],
        data: function() {
            return {
                isChecked: this.checked
            }
        },
        methods: {
            tap: function() {
                console.log(this.isChecked);
                this.isChecked = !this.isChecked;
                
            }
        }
    }
</script>  