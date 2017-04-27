<template>
    <s-cell height="3.421056" :on-tap='onTapCallback' class="_next-card" border="true">
        <s-flex-column>
        </s-flex-column>
        <s-multiline width="12" align="left" self-align="center">
            <b-text color="black" size="30">
                {{itemData.bankName}} &nbsp; 尾号{{itemData.bankNum}} <br>
                <b-text color="light" size="24">单笔限额{{itemData.limit}}万</b-text>
            </b-text>
        </s-multiline>
        <s-column width="6" align="right">
            <b-icon v-if="checked" size="30" color="high" name="check"></b-icon>
        </s-column>
        <s-flex-column>
        </s-flex-column>
    </s-cell>
    
</template>

<script>
// <b-text>{{itemIndex}} - {{itemData.name}} - {{checked}}</b-text>
    // 银行卡 点击 进入下一页
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