<template>
    <div class='_protocol'>
        <b-checkbox :checked="isChecked"></b-checkbox>
        <span class='_protocal-text'><slot></slot><span>
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