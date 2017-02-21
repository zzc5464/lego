<!--1、父子组件之间相互传递
    2、参数代入
-->
<template>
    <div>
        <ul>
            <slot></slot>
        </ul>
        <slot name='head'></slot>
        <h1 :src='wenben'>{{wenben}}</h1>
        <slot name='footer'></slot>
        <slot name='child'></slot>
    </div>
</template>

<script>
    var child = require('./child.vue.js');
    module.exports = {
        props:['time','wenben'],
        data: function () {
            return {
                times: this.time + 1,
                texts: this.wenben
            }
        },
        components:{
            child
        }
    }
</script> 
<style scoped>

</style>