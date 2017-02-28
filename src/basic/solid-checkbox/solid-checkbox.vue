<template>
    <span @click="tap" :checked="isChecked" class="_solid_checkbox" :class="{_solid_checkbox_active: isChecked}">
    </span>
</template>

<script>
    module.exports = {
        props: ['checked', 'name'],
        data: function() {
            return {
                isChecked: this.checked
            }
        },
        methods: {
            tap: function() {
                // console.log(this.isChecked);
                this.isChecked = !this.isChecked;
            }
        }
    }
</script>