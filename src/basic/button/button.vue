<template>
    <button class='_button' :class='classObj' :style='styleObj' v-on:click='timeKeep'><slot></slot></button>
</template>

<script>
    var bus = require('../../utils/eventBus');
    module.exports = {
        props: [ 'width', 'height', 'size', 'filled','validate','seconds'],

        data: function () {
            
            var obj = {}, list = [];

            this.width  && (obj.width  = this.width  + 'rem');
            this.height && (obj.height = this.height + 'rem');

            this.size 
            && list.push('_text_size_' + this.size + 'px');

            this.filled === 'true' 
            && list.push('_button_filled');

            return {
                styleObj: obj,
                classObj: list
            }
        },
        methods:{
            timeKeep:function(){
                if(this.validate){
                    alert(1);
                    bus.$on('phoneNum',function(res){
                        alert(res);
                    })
                }
            }
        }
    }
</script>
