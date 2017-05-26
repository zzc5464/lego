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
    <div v-else-if='type === 4' class="_assetheader" :class="classObj" :style="styleObj">
        <header class="header">
            <h6>{{datas.header}}</h6>
            <h2>{{datas.invest}}</h2>
        </header>
        <ul class="_three">
            <li>
                <div>{{ datas.title1 }}</div>
                <div>{{ datas.value1 }}</div>
            </li>
            <li>
                <div>{{ datas.title2 }}</div>
                <div>{{ datas.value2 }}</div>
            </li>
            <li>
                <div>{{ datas.title3 }}</div>
                <div>{{ datas.value3 }}</div>
            </li>
        </ul>
    </div>
    <div v-else-if='type === 5' class="_assetheader" :class="classObj" :style="styleObj">
        <header>
            <h6 class="_eyecenter">{{tempData.header}} <b-icon size="40" name="eye" @tapped="hiddenData" v-show="open == true"></b-icon><b-icon size="40" name="eye-closed" @tapped="hiddenData" v-show="open != true" ></b-icon></h6>
            <h2>{{tempData.invest}}</h2>
        </header>
        <ul class="_three _second">
            <li>
                <div>{{ tempData.title1 }}</div>
                <div>{{ tempData.value1 }}</div>
            </li>
            <li>
                <div>{{ datas.title2 }}</div>
                <div>{{ tempData.value2 }}</div>
            </li>
        </ul>
    </div>
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
            },

            label: {
                type: String,
                default: ''
            },

            topData: {
                type: Object,
                default: function () { return {}; }
            }
        },
        data: function() {
            var obj = {}, list = [], t = 0;
            var temp = {};
            for(var i in this.topData) {
                temp[i] = this.topData[i];
            }

            if (this.label === '1') {
                t = 4;
            } 
            else if (this.label === '2') {
                t = 5;
            } 
            else if (this.header === '' && this.footer === '') {
                obj.height = '3.684211rem';
                list.push('_setflex');
                t = 0;
            }

            else if (this.header !== '' && this.footer === '') {
                obj.paddingTop = '1.052632rem';
                t = 1;
            }

            else if (this.header === '' && this.footer !== '') {
                t = 0;
            }

            else if (this.header !== '' && this.footer !== '' && this.link === '') {
                t = 2;
            }

            else if (this.header !== '' && this.footer !== '' && this.link !== '') {
                t = 3;
            }
            
            return {
                tempData: this.topData,
                datas: temp,
                open: true,
                classObj: list,
                styleObj: obj,
                type: t
            };
        },
        methods: {
            hiddenData: function() {
 
                if(this.tempData.invest !== '****') {
                    this.tempData.invest = '****';
                    this.tempData.value1 = '****';
                    this.tempData.value2 = '****';
                    this.open = false;
                } else {
                    this.tempData.invest = this.datas.invest;
                    this.tempData.value1 = this.datas.value1;
                    this.tempData.value2 = this.datas.value2;
                    this.open = true;
                }
                
            }
        }
    }
</script>