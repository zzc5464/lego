<template>
    <div class="_amountCapital">
        <p>充值金额</p>
        <div class="_amountdesc">
            <span class="_unit">￥</span>
            <input class="_amount" @input="inputTap" id="payamount" type="number" :placeholder="placeholder"  value=""> 
            <div>
                <b-icon name="round-cross" color="stonegrey" size="40" v-on:tapped="iconTap" id="clearamounts" data-tappable="" ontouchstart=""></b-icon>
                <b-highlight>全部转出</b-highlight>
            </div>
            
        </div> 
        <h2 id="mapText">
            <strong id="capitalamount"></strong>
            <span id="tiperror" class="_tiperror">已超限额</span> 
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
                if(inputValue === 'undefine') {
                    $('#mapText')[0].style.display = 'none';
                } else {
                    $('#mapText')[0].style.display = 'block';
                }

                $('#clearamounts')[0].style.opacity = '1';
                $('#capitalamount')[0].innerHTML = amountCapital.sumCapital(inputValue);

                if (inputValue == ''){
                    $('#clearamounts')[0].style.opacity = '0';
                }
                
                if (inputValue > parseFloat(this.label)){
                    $('#tiperror')[0].style.opacity = '1';
                } else {
                    $('#tiperror')[0].style.opacity = '0';
                }
            },
            iconTap: function (){
                $('#clearamounts')[0].style.opacity = '0';
                $('#payamount')[0].value = '';
                $('#capitalamount')[0].innerHTML = '';
                $('#tiperror')[0].style.opacity = '0';
            }
        }
    }
</script>
