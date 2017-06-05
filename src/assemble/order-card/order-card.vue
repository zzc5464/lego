<template>
    <s-cell height="3.421056" :on-tap='onTapCallback' class="_order-card" :class="{_cell_next: isGoNext}" border="true">
        <s-flex-column>
        </s-flex-column>
        <s-multiline width="10" align="left" self-align="center">
            <b-text :color="color" :size="size" :class="isNewLH">
                {{itemData.orderName}}<b-text class="_vertical" color="light" size="24">{{itemData.orderDesc}}</b-text> 
                <br>
                <b-text color="light" size="24">{{itemData.orderTime}} <b-text color="black" size="24">{{itemData.restore}}</b-text> </b-text>
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
            },

            color: {
                type: String,
                default: 'black'
            },

            // 左侧特殊字体大小
            size: {
                type: String,
                default: '30'
            }

        },
        

        data: function () {
            return {
                isGoNext : (this.itemData.orderType !=='1' && this.itemData.orderType !=='2'),
                isNewLH : this.color == 'orange' ? '_newlh-min' : '_newlh'
            }
        },

        methods: {
            onTapCallback: function (e) {
                this.onTap(this.itemData, e);
            }
        }
    }
</script>