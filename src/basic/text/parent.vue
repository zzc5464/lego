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
    module.exports = {
        props:['time','wenben'],
        data: function () {
            return {
                times: this.time + 1,
                texts: this.wenben
            }
        }
    }
</script> 
<style scoped>

</style>