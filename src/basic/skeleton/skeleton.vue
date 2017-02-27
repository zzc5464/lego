<template>
    <span class='_skeleton' :class='classObj'><slot></slot></span>
</template>

<script>
    module.exports = {
        props: [ 'size', 'bgcolor' ],

        data: function() {
            
            var list = [];

            this.bgcolor 
            && list.push('_bgcolor_' + this.bgcolor);

            this.size
            && list.push('_text_size_' + this.size + 'px');

            return {
                classObj: list
            };
        }
    }
</script> 