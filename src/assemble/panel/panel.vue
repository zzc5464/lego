<template>
    <div class='_panel' :class='classObj'><slot></slot></div>
</template>

<script>
    module.exports = {
        props: [ 'bgcolor' ],
        data: function() {
            var list = [];
            this.bgcolor && list.push('_bgcolor_' + this.bgcolor);

            return {
                classObj: list
            };
        }
    }
</script>