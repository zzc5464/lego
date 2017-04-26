<template>
    <div>
        <component v-for='(item, index) in data' :is='card' :item-data='item' :item-index='index' :checked='name !== "" && item[name] === value' :support='support' :on-tap='onTapCallback'></component>
    </div>
</template>

<script>
    module.exports = {
        props: {

            // 卡片类型
            card: {
                type: String,
                default: 'next-card'
            },

            // 列表数据，要求是数组格式
            data: {
                type: Array,
                default: function () { return {}; }
            },

            // 默认选中的字段名称
            name: {
                type: String,
                default: ''
            },

            // 默认选中的值
            value: {
                type: String,
                default: ''
            },

            // 处理点击事件的回调函数，参数为该项数据对象
            onTap: {
                type: Function,
                default: function () {}
            },

            support: {
                type: Number,
                default: 1
            }

        }, 

        data: function () { 
            return {}; 
        },

        methods: {
            onTapCallback: function (itemData, e) {
                this.onTap(itemData, e);
            }
        }
    }
</script>