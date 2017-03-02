<template>
    <span @click="tap" class="_solid_radio" :class="{_solid_radio_active: isChecked}" :checked="isChecked">
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