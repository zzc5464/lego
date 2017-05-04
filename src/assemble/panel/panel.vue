<template>
    <div class='_panel' :class='classObj'><slot></slot></div>
</template>

<script>
    module.exports = {
        props: {
            bgcolor: {
                type: String,
                default: ''
            },

            labelWidth: {
                type: String,
                default: '4.871795'
            }
        }, 

        data: function() {
            var list = [];
            this.bgcolor && list.push('_bgcolor_' + this.bgcolor);

            var slots = this.$slots.default, length = slots.length,
                options, propsData;

            for (var i=0; i<length; i++) {
                options = slots[i].componentOptions;
                options && (propsData = options.propsData);
                options && propsData && (propsData['labelWidth'] = parseFloat(this.labelWidth));
            }

            return {
                classObj: list
            };
        }
    }
</script>