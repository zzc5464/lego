<template>
    <span @click="tap" :checked="isChecked" class="_solid_checkbox" :style="styleObj" :class="{_solid_checkbox_active: isChecked}">
    </span>
</template>

<script>
    module.exports = {
        props: ['checked', 'name', 'width', 'height'],
        data: function() {
            var obj = {};

            this.width && (obj.width = this.width + 'rem');
            this.height && (obj.height = this.height + 'rem');
            return {
                styleObj: obj,
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