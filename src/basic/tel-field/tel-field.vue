<template>
    <div>
        <input type="tel" name="" placeholder="请输入预留手机号码" v-on:vali='validate(1)' v-model='phone'>
        <button type="" v-on:click="validate">提交</button>
    </div>
</template>

<script>
    module.exports = {
        props:['size','c'],
        data: function() {
            return {
                phone:''
            };
        },
        methods: {
            validatePhonePrefix :function(number){
                if (number.indexOf("13") === 0){
                    return true;
                }
                if (number.indexOf("14") === 0){
                    return true;
                }
                if (number.indexOf("15") === 0){
                    return true;
                }
                if (number.indexOf("16") === 0){
                    return true;
                }
                if (number.indexOf("17") === 0){
                    return true;
                }
                if (number.indexOf("18") === 0){
                    return true;
                }
                if (number.indexOf("19") === 0){
                    return true;
                }
                return false;
            },
            validate:function(){
                var errorMsg = '',
                    ret = this.validatePhonePrefix(this.phone);
                if (this.phone.length !== 11){
                    errorMsg = "长度应为 11 位！";
                }else if (!ret){
                    errorMsg =  "格式不正确！";
                }else if(!this.phone.match(/[0-9]{11}/)){
                    errorMsg = "只能填写数字！";
                }
                console.log(errorMsg);
            }
        }
    }
</script>

<style scoped lang="scss">
    @import '../../sass/lego.scss';
    input{
        color:$c6;
        font-size:16px;
    }
</style>