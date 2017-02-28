<template>
    <div>
        <input class="_input" type="tel" name="" placeholder="请输入预留手机号码" v-on:blur='sendMsg' v-model='phone'>
        <button type="" v-on:click="sendMsg">提交</button>
    </div>
</template>

<script>
    var bus = require('../../utils/eventBus');
    module.exports = {
        props:['size','c'],
        data: function() {
            return {
                phone:''
            };
        },
        methods: {
            // validatePhonePrefix :function(number){
            //     if (number.indexOf("13") === 0){
            //         return true;
            //     }
            //     if (number.indexOf("14") === 0){
            //         return true;
            //     }
            //     if (number.indexOf("15") === 0){
            //         return true;
            //     }
            //     if (number.indexOf("16") === 0){
            //         return true;
            //     }
            //     if (number.indexOf("17") === 0){
            //         return true;
            //     }
            //     if (number.indexOf("18") === 0){
            //         return true;
            //     }
            //     if (number.indexOf("19") === 0){
            //         return true;
            //     }
            //     return false;
            // },
            validate:function(){
                var errorMsg = '';
                if(this.phone.length !== 11){
                    errorMsg = "长度应为 11 位！";
                }else if (!this.phone.substr(0,2).match(/[1][3-9]/)){
                    errorMsg =  "格式不正确！";
                }else if(!this.phone.match(/[0-9]{11}/)){
                    errorMsg = "只能填写数字！";
                }
                return errorMsg;
            },
            sendMsg: function(){
                valMsg = this.validate();
                bus.$emit('phoneNum',valMsg);
            }
        }
    }
</script>

<style scoped lang="sass">
    $blue: #1875e7;
    $side: left;
    .class1{
        border:1px solid #ddd;
    }

    @mixin left($value){
        float: left;
        width:$value;
    }

    input{
        color: $blue;
        @extend .class1;
        @include left(200px);
        border-#{$side}-radius :5px;
    }
    div{
        input{
            text-align : $side;
        }
    }
    @function double($n){
        @return $n *2;
    }

    button{
        @extend .class1;
        @include left(50px);
        background-color: lighten(#cc3, 10%);
        height: double(15px);
    }
</style>