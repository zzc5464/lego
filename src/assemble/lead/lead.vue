<template>
    <div v-if='type === 0' class="_assetheader" :class="classObj" :style="styleObj" >
        <h3><slot></slot></h3>
        <h6>{{ footer }}</h6>
    </div>
    <div v-else-if='type === 1' class="_assetheader" :class="classObj" :style="styleObj" >
        <h6>{{ header }}</h6>
        <h2><slot></slot></h2>
    </div>
    <div v-else-if='type === 2' class="_assetheader">
        <b-text size='21' color='high'>{{ header }}</b-text>
        <div>
            <b-text size='36' color='white'><slot></slot></b-text>
        </div>
        <b-text size='22' color='high'>{{ footer }}</b-text>
    </div>
    <div v-else-if='type === 3' class="_assetheader">
        <b-text size='21' color='high'>{{ header }}</b-text>
        <div>
            <b-text size='36' color='white'><slot></slot></b-text>
            <b-select :id='linkId' size='24' color='high'>{{ link }}</b-select>
        </div>
        <b-text size='22' color='high'>{{ footer }}</b-text>
    </div>
    <div v-else ></div>
</template>

<script>
    module.exports = {
        props: {
            header: {
                type: String,
                default: ''
            },

            footer: {
                type: String,
                default: ''
            },

            link: {
                type: String,
                default: ''
            },

            linkId: {
                type: String,
                default: ''
            }
        },
        data: function() {
            var obj = {}, list = [], t = 0;

            if (this.header === '' && this.footer === '') {
                obj.height = '3.684211rem';
                list.push('_setflex');
                t = 0;
            }

            if (this.header !== '' && this.footer === '') {
                obj.paddingTop = '1.052632rem';
                t = 1;
            }

            if (this.header === '' && this.footer !== '') {
                t = 0;
            }

            if (this.header !== '' && this.footer !== '' && this.link === '') {
                t = 2;
            }

            if (this.header !== '' && this.footer !== '' && this.link !== '') {
                t = 3;
            }

            // var list = [];
            // var obj = {};
            // this.height && (obj.paddingTop = '1.052632rem');
            // this.oneline && (obj.height = '3.684211rem');
            // this.oneline && list.push('_setflex');
            return {
                classObj: list,
                styleObj: obj,
                type: t
            };
        },
        methods: {
            
        }
    }
</script>