<template>
    <div>
        <button @click="tapping" :style="obj" ><slot></slot></button>
    </div>
</template>

<script>
    var bus = require('../../utils/eventBus');
    module.exports = {
        props: [ 'width', 'height', 'filled'],
        data: function () {
            return {
                phoneNum :0,
                obj: {
                    width: (this.width || 4) + 'rem' ,
                    height: (this.height || 1.5) + 'rem',
                    backgroundColor: this.filled || 'transparent',
                    lineHeight: (this.height || 1.5) + 'rem'
                }
            };
        },
        mounted:function(){
            var self = this;
            bus.$on('phoneNum',function(msg){
               self.phoneNum = msg;
            })
        },

        methods: {
            tapping: function(){
                console.log(this.phoneNum);
            }
        }
    }
</script>

<style scoped>
    button {
        border: none;
        padding: 0;
        border-radius: 4px;
        text-align: center;
    }
</style>