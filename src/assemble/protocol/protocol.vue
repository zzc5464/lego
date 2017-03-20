<template>
    <div class='_protocol'>
        <b-checkbox :checked="isChecked"></b-checkbox>
        <slot></slot>
    </div>
</template>

<script>

    module.exports = {
        props: [ 'checked'],
        data: function() {

            return {
                isChecked: this.checked
            };
        }
    }
</script>