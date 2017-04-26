<template>
    <s-cell height="3.421056" :on-tap='onTapCallback' class="_next-card" border="true">
        <s-flex-column>
        </s-flex-column>
        <s-multiline width="10" align="left" self-align="center">
            <b-text color="black" size="30">
                {{itemData.orderName}}<b-text color="light" size="24">{{itemData.orderDesc}}</b-text> 
                <br>
                <b-text color="light" size="18">{{itemData.orderTime}}</b-text>
            </b-text>
        </s-multiline>
        <s-column width="8" align="right">
            <b-text size="30" color="coral" v-if="itemData.orderType=='1'">+{{itemData.orderAmount}}元</b-text>
            <b-text size="30" color="black" v-else-if="itemData.orderType=='2'">-{{itemData.orderAmount}}元</b-text>
            <b-text size="30" color="black" v-else>{{itemData.orderAmount}}元</b-text>
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
        
        computed: {
            isIncome: function(){
                if(this.itemData.orderAmount.indexOf('+')> -1){
                    return true;
                }
            }
        },
        methods: {
            onTapCallback: function (e) {
                this.checked = true;
                this.onTap(this.itemData, e);
            }
        }
    }
</script>