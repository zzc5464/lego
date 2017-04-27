<template>
    <div class='_cell' :class='classObj' :style='styleObj' @mytap='onTapCallback' data-tappable >
        <slot></slot>
    </div>
</template>

<script>
    module.exports = {
        props: {
            height: {
                type: String,
                default: '2.473684'
            },
            minHeight: {
                type: String,
                default: ''
            },
            border: {
                type: String,
                default: ''
            },
            bgcolor: {
                type: String
            },
            onTap: {
                type: Function,
                default: function () {}
            }
        },
        data: function() {
            var list = [];
            this.border === 'true' && list.push('_border');
            this.bgcolor && list.push('_bgcolor_' + this.bgcolor);

            return {
                styleObj: this.minHeight ? {
                    minHeight: this.minHeight + 'rem'
                } : {
                    // height: (this.height || '2.473684') + 'rem'
                    height: this.height + 'rem'
                },
                classObj: list
            };
        },
        methods: {
            onTapCallback: function (e) {
                this.onTap(e);
            }
        }
    }
</script>