<template>
    <div>
        <div class="_mask" v-show="visible" @click="mask" ></div>
        <div class="_modal-wrap">
            <div class="_modal-content">
                <slot></slot>
            </div>
            <div class="_modal-footer">
                <b-text-button size="34" color="black">去意已决</b-text-button>
                <b-text-button size="34" color="high">在想想</b-text-button>
            </div>
        </div>
    </div>
</template>

<script>
    var events = require('../../utils/gum.vue.events');

    module.exports = {
        props: [ 'length'],
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