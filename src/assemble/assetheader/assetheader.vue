<template>
    <div class="_assetheader" :class="classObj" :style="styleObj" >
        <h3><slot name="thintitle"></slot></h3>
        <h6><slot name="minidesc"></slot></h6>
        <h2><slot name="boldtitle"></slot></h2>  
    </div>
</template>

<script>
    module.exports = {
        props: ['height' ,'oneline'],
        data: function() {
            var list = [];
            var obj = {};
            this.height && (obj.paddingTop = '1.052632rem');
            this.oneline && (obj.height = '3.684211rem');
            this.oneline && list.push('_setflex');
            return {
                classObj: list,
                styleObj: obj
            };
        },
        methods: {
            
        }
    }
</script>