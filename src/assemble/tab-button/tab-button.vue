<template>
    <div v-if="elements.length === 2" class="ruletab ruletab1">
        <span :class="{borderbtm:isA}" @click="toggle1" :id="elements[0].id">{{elements[0].text}}</span>
        <span :id="elements[1].id" @click="toggle2" :class="{borderbtm:isB}">{{elements[1].text}}</span>
    </div> 
    <div v-else class="ruletab ruletab2">
        <span :id="elements[0].id" :class="{borderbtm:isA}" @click="toggle1">{{elements[0].text}}</span>
        <span :id="elements[1].id" :class="{borderbtm:isB}" @click="toggle2">{{elements[1].text}}</span>
        <span :id="elements[2].id" :class="{borderbtm:isC}" @click="toggle3" >{{elements[2].text}}</span>
    </div>
</template>

<script>
    module.exports = {
        props: [],
        data: function (){
            var slots = this.$slots.default,
            elems = [], options, children;

            slots.forEach(function (s) {
                options = s.componentOptions;
                if (options && options.propsData && options.propsData.id) {
                    children = options.children;
                    if (children.length > 0 && typeof children[0].text !== 'undefined') {
                        elems.push({
                            id: options.propsData.id,
                            text: children[0].text
                        });
                    }
                }
            });
            return {
                elements: elems,
                isA: true,
                isB: false,
                isC: false
            }
        },
        methods: {
            toggle1: function(){
                this.isA = true;
                this.isB = false;
                this.isC = false;
            },
            toggle2: function(){
                this.isA = false;
                this.isB = true;
                this.isC = false;
            },
            toggle3: function(){
                this.isA = false;
                this.isB = false;
                this.isC = true;
            }
        }
    }
</script>

<style>
    .ruletab {
        padding-top: 9px;
        overflow: hidden;
        background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100%' height='1'><rect fill='#dcdcdc' x='0' y='0.5' width='100%' height='0.5'/></svg>");
        background-position: 0 100%;
        background-repeat: no-repeat;
        background-color: #fff;
    }
    .ruletab span {
        position: relative;
        display: inline-block;
        width: 5.263158rem;
        color: #333;
        font-size: .789474rem;
        line-height: 1.894737rem;
        text-align: center;
        
    }
    .ruletab1 span{
        margin: 0 1.578947rem;
    }
    .ruletab1 span:last-child {
        float: right;
    }
    .ruletab span.borderbtm {
        border-bottom: 2px solid #d7ac62;
        color: #d7ac62;
    }
    .ruletab2 {
        display: flex;
    }
    .ruletab2 span{
        margin: 0 0.7rem;
        flex: 1;
    }
</style>