<template>
    <div v-if="!type" class="_assetheader" :class="classObj" :style="styleObj" >
        <h3><slot name="thintitle"></slot></h3>
        <h6><slot name="minidesc"></slot></h6>
        <h2><slot name="boldtitle"></slot></h2>  
    </div>
    <div v-else class="_assetheader " >
        <b-text size='21' color='high'><slot name="ge-title"></slot></b-text>
        <div>
            <b-text size='36' color='white'><slot name="ge-name"></slot></b-text>
            <b-select size='24' color='high'><slot name="ge-select"></slot></b-select>
        </div>
        <b-text size='22' color='high'><slot name="ge-time"></slot></b-text>
    </div>
</template>

<script>
    module.exports = {
        props: {
            height: {
                type: String
            },
            oneline: {
                type: Boolean,
                default: false
            },
            type: {
                type: Boolean,
                default: false
            }
        },
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