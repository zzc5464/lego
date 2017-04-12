<template>
    <div class="_card-invest">
        <div class="_card-title" >
            <b-solid-radio v-if="type"></b-solid-radio>
            <b-text color="black" size="28" ><slot name="title"></slot></b-text>
            <label v-show="!nolabel"><slot name="labelname"></slot></label>
        </div>
        <div class="_card-wrap">
            <div class="_wrap-title">
                <b-text><slot name="currentrate"></slot></b-text>
                <i></i>
                <b-text><slot name="changerate"></slot></b-text>
            </div>
            <div class="_wrap-content">
                <b-text color="black" size="30">
                    <slot name="currentshare"></slot>
                    <b-text color="black" v-show="!type" size="24">%</b-text>
                </b-text>

                <b-text 
                    color="black" 
                    size="30" 
                    v-if="type">
                    <slot name="currentvalue"></slot></b-text>
                <span v-else>
                    <input :value="rate" />
                    <b-text color="black" size="24"> %</b-text>
                </span>
            </div>
        </div>
    </div>
</template>

<script>
    var events = require('../../utils/gum.vue.events');

    module.exports = {
        props: {
            type: {
                Boolean,
                default: false
            },
            rate: {
                Number,
                default: 0
            },
            nolabel: {
                Boolean,
                default: false
            }
        },
        mounted: function(){
            
        },
        data: function() {
            
            return {
                num: this.length
            };
        },
        methods: {
            tapped: function(){
                console.log(this.num);
                var children = document.querySelectorAll('li');
                (parseInt(this.num) > children.length) &&  (this.num = 6);
                (parseInt(this.num) < 0) &&  (this.num = 0);
                for(i=0;i<=(this.num-1);i++){
                    children[i].innerHTML = '&#9679;';
                }
               
            }
        }
    }
</script>