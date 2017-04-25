<template>
    <s-single-cell :on-tap='onTapCallback'>
        <b-text>{{itemIndex}} - {{itemData.name}} - {{checked}}</b-text>
    </b-single-cell>
</template>

<script>
    module.exports = {
        props: {

            itemData: {
                type: Object,
                default: function () { return {}; }
            },

            itemIndex: {
                type: Number,
                default: 0
            }, 

            checked: {
                type: Boolean,
                default: false
            },

            onTap: {
                type: Function,
                default: function () {}
            }

        },

        data: function () {
            return {}
        },

        methods: {
            onTapCallback: function (e) {
                this.onTap(this.itemData, e);
            }
        }
    }
</script>