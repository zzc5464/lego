<!--1、父子组件之间相互传递
    2、参数代入
-->
<template>
    <div>
        <ul >
            <li v-for='n in lists'>{{n}}</li>
        </ul>
        <slot name='head'></slot>
        <h1 :style="{color:activeColor, fontSize:fontSize + 'rem'}" :src='wenben'>{{wenben}}</h1>
        <slot name='child'></slot>
    </div>
</template>

<script>
    module.exports = {
        props:['time','wenben','list'],
        data: function () {
            return {
                times: this.time + 1,
                texts: this.wenben,
                activeColor:'blue',
                fontSize:2,
                lists:this.list
            }
        }
    }
</script> 
<style scoped>
    ul{
        display:flex;
        flex-flow:row wrap;
        justify-content:center;
        align-items: center;
    }
    li{
        flex:1;
        border:#666 solid 1px;
    }
</style>