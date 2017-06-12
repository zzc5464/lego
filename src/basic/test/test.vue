<template>
    <div>
        <button @click='toshow'>点击</button>
        <div class="_test1" v-show="isShow" transition="slide">
            <p ref="pp" >xdsfasdfasdfasdfdfasdfdsfsdfdfxxxxx</p>
        </div>
    </div>
    
</template>

<script>
    module.exports = {
        props: {
            isshow: {
                type: Boolean,
                default: false
            }
        },
        data: function() {
            return {
                isShow: this.isshow
            };
        },
        methods: {
            toshow: function(){
                this.isShow = !this.isShow;
            }
        }
    }
</script>
<style >
    button { width: 100px; height: 40px; text-align: center; line-height: 40px; border: none; background-color: #f40; color: #fff; size: 24px;}
    ._test1 {
        position: absolute; bottom: 0;left: 0; z-index: 10;
        width: 100%; height: 200px;background: #fff; text-align: center; font-size: 30px; color: green; line-height: 40px;box-sizing: border-box;
    }
    ._test1 .slide-transition {
        transition: all 0.5;
        transform: translate3d(0,280px,0);
    }
    ._test1 .slide-enter,._test1 .slide-leave {
        transform: translate3d(0,100px,0);
    }

</style>