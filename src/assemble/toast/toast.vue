<template>
    <div id="toast" class="_toast" v-if="!toptoast" >
        <div class="_toast_container">
            <div class="_toast_message">
                <slot></slot>
            </div>
        </div>
    </div>
    <div class='_top-toast' v-else>
        <slot></slot>
    </div>
      
</template>

<script>
    module.exports = {
        props: {
            toptoast: {
                type: Boolean,
                default: false
            }
        },
        data: function() {

            return {
                isShow: false
            };
        },
        methods: {
            // toastShow: function() {
            //     var that = this;
            //     that.isShow = true;
            //     setTimeout(function(){
            //         that.isShow = false;
            //     },3000);
            // }
        }
    }
</script>