<template>
    <div class='_protocol'>
        <a-checkbox :checked="isChecked"></a-checkbox>
        <slot></slot>
    </div>
</template>

<script>
    var checkbox    = require('../../basic/checkbox/checkbox.vue.js');

    module.exports = {
        props: [ 'checked'],
        data: function() {

            return {
                isChecked: this.checked
            };
        },
        components: {
            'a-checkbox'  : checkbox  
        }
    }
</script>