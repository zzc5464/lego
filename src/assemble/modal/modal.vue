<template>
    <div>
        <div class="_mask" v-show="visible" @mytab="mask" ></div>
        <div class="_modal-wrap">
            <div class="_modal-title" v-show="false">
                <b-text color="black" size="34"><slot name="title">健康告知提醒</slot></b-text>
            </div>
            <div class="_modal-content" v-if="type== 1">
                <b-text color="black" size="34"><slot name="content"></slot></b-text>
            </div>
            <div class="_modal-footer">
                <b-text-button width="5" size="34" color="black">去意已决</b-text-button>
                <b-text-button width="5" size="34" color="black">在想想</b-text-button>
            </div>
        </div>
    </div>
</template>

<script>
    var events = require('../../utils/gum.vue.events');

    module.exports = {
        props: {
            type: {
                type: String,
                default: "1"
            },
            visible: {
                type: Boolean,
                default: false
            }
        },
        data: function() {
            
            return {
               
            };
        },
        methods: {
            mask: function(){

            }
        }
    }
</script>