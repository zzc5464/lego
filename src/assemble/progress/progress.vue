<template>
    <div class='_progress' :class='classObj' :style='styleObj'>
        <stage v-for='(value, key, index) in object'>
            {{ index+1 }}
            <b-text slot='desc' v-show='isDesc'>{{ value }}</b-text>
        </stage>
    </div>
</template>

<script>
    module.exports = {
        // props: [ 'ele', 'length', 'step', 'desc'],
        props: {
            ele: Object,
            length: {
                type: [String, Number],
                default: 3
            },
            step: {
                type: String,
                default: '_p3'
            },
            desc: {
                type: Boolean,
                default: false
            }
        },
        data: function() {
            var list = [],
                obj = {};
            this.length && this.length == '3' && list.push('_p3');
            this.length && this.length == '2' && list.push('_p2');
            this.step && list.push(this.step);

            this.desc && (obj.height = '1.3rem');
            obj.width = ((192 * this.length)/38).toFixed(6) + 'rem'; 

            
            return {
                num: this.length,
                classObj: list,
                object: this.ele,
                styleObj: obj,
                isDesc: !this.desc
            };
        }
    }
</script>