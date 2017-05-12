<template>
    <div class="_amountCapital">
        <p>充值金额</p>
        <div class="amountdesc">
            <span class="unit">￥</span>
            <input class="amount" @input="inputTap" id="payamount" type="number" :placeholder="placeholder"  value=""> 
            <i v-on:mytap="iconTap" id="clearamounts" class="clearall" data-tappable="" ontouchstart="" style="display: none;"></i>
        </div> 
        <h2>
            <strong id="capitalamount"></strong>
            <span id="tiperror" class="tiperror" style="display: none;">已超限额</span> 
        </h2> 
    </div>
</template>

<script>
    var amountCapital = require('../../utils/amount.capital');
    var $ = function (selector){
    		return document.querySelectorAll(selector);
    	}

    module.exports = {
        props: {
            label: {
                type: String
            },
            placeholder: {
                type: String,
                default: '请输入充值金额'
            }
        },
        data: function() {
            return {

            }
        },
        methods: {
            inputTap: function (){
                var inputValue = $('#payamount')[0].value;

                $('#clearamounts')[0].style.display = 'block';
                $('#capitalamount')[0].innerHTML = amountCapital.sumCapital(inputValue);

                if (inputValue == ''){
                    $('#clearamounts')[0].style.display = 'none';
                }
                
                if (inputValue > parseFloat(this.label)){
                    $('#tiperror')[0].style.display = 'block';
                } else {
                    $('#tiperror')[0].style.display = 'none';
                }
            },
            iconTap: function (){
                $('#clearamounts')[0].style.display = 'none';
                $('#payamount')[0].value = '';
                $('#capitalamount')[0].innerHTML = '';
                $('#tiperror')[0].style.display = 'none';
            }
        }
    }
</script>

<style>
    ._amountCapital {
        min-height: 50%;
        background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100%' height='1'><rect fill='#dcdcdc' x='0' y='0.5' width='100%' height='0.5'/></svg>");
        background-position: 0 100%;
        background-repeat: no-repeat;
    }
    ._amountCapital {
        padding: 0.789474rem 0.789474rem 0.526316rem;
        background-color: #fff;
    }
    ._amountCapital p,
    ._amountCapital .amountdesc{
        color: #333;
        margin-bottom: 16px;
        font-size: 0.631579rem;
    }
    ._amountCapital .amountdesc {
        position: relative;
        margin-bottom: 6px;
    }
    ._amountCapital .unit {
        display: inline-block;
        vertical-align: -2px;
        font-size: 1.578947rem;
    }
    ._amountCapital .amount {
        font-size: 1.157895rem;
        text-align: left;
        font-weight: normal;
        display: inline-block;
        width: 80%;
    }
    ._amountCapital .amountdesc input::-webkit-input-placeholder {
        font-size: .98rem;
        font-weight: normal;
    }
    ._amountCapital .amountdesc i {
        position: absolute;
        right: 0px;
        top: 0.5rem;
        width: 1.26316rem;
        height: 1.26316rem;
        background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" t="1490767245272" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" p-id="2328" width="200" height="200"><defs><style type="text/css"/></defs><path d="M526.377 842.717c-189.805 0-345.098-155.294-345.098-345.098s155.294-345.098 345.098-345.098 345.098 155.294 345.098 345.098-155.294 345.098-345.098 345.098zM690.301 368.208c11.502-11.502 11.502-25.879 0-37.383s-25.879-11.502-37.383 0l-129.41 129.41-126.534-126.534c-11.502-11.502-25.879-11.502-37.383 0s-11.502 25.879 0 37.383l129.41 129.41-126.534 126.534c-11.502 11.502-11.502 25.879 0 37.383s25.879 11.502 37.383 0l129.41-129.41 129.41 129.41c11.502 11.502 25.879 11.502 37.383 0s11.502-25.879 0-37.383l-129.41-129.41 123.659-129.41zM690.301 368.208z" fill="#c1c1c1" p-id="2329"/></svg>') ;
        background-repeat: no-repeat;
        background-position: center center;
        background-size: 100% 100%;

    }
    ._amountCapital h2 {
        position: relative;
        line-height: inherit;
    }
    ._amountCapital strong {
        display: inline-block;
        vertical-align: middle;
        width: 70%;
        text-align: left;
        font-weight: normal;
        color: #999;
        font-size: 0.789474rem;
        padding-left: 1.473684rem;
        line-height:1rem;
        word-wrap: break-word;
    }
    ._amountCapital .tiperror {
        position: absolute;
        right: 0;
        bottom: 0;
        text-align: right;
        font-size: 0.631578rem;
        color: #e6654c;
        vertical-align: middle;
    }
</style>