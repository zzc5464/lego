<template>
    <s-cell :height="newHeight" :border-padding="borderPadding" :on-tap='onTapCallback' class="_welfare-card"  bgcolor='white' border="true">
        <s-flex-column>
        </s-flex-column>
        <s-column width="6" align="left">
            <b-text color="light" size="28">{{ leftLabel }}</b-text>
        </s-column>
        <s-multiline width="11" align="right" self-align="center">
            <b-text color="high" size="24" class="_text-right">{{rightLabel}}<br>
                <b-text color="light" size="22" v-show="rightNote">{{rightNote}}</b-text>
            </b-text>
        </s-multiline>
        <s-column width="1" align="right" >
            <b-icon name="angle-right-bold" color="light" size="28"></b-icon>
        </s-column>
        <s-flex-column>
        </s-flex-column>
    </s-cell>
    
</template>

<script>
    // 银行卡 点击 进入下一页
    module.exports = {
        props: {
            leftLabel: {
                type: String,
                default: ''
            },

            rightLabel: {
                type: String,
                default: ''
            }, 

            rightNote: {
                type: String,
                default: ''
            },

            onTap: {
                type: Function,
                default: function () {}
            },

            height: {
                type: String,
                default: '110'
            },

            borderPadding: {
                type: Boolean,
                default: false
            }

        },
        

        data: function () {
            return {
                tempData: this.itemData
            }
        },

        computed: {
            newHeight: function(){
                return (this.height/38).toFixed(6);
            }
        },

        methods: {
            onTapCallback: function (e) {
                this.onTap(this.itemData, e);
            }
        }
    }
</script>