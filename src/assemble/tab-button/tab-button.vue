<template>
    <div v-if="elements.length === 2" class="_ruletab _ruletab1">
        <span :class="{_borderbtm:isA}" @click="toggle1" :id="elements[0].id">{{elements[0].text}}</span>
        <span :id="elements[1].id" @click="toggle2" :class="{_borderbtm:isB}">{{elements[1].text}}</span>
    </div> 
    <div v-else class="_ruletab _ruletab2">
        <span :id="elements[0].id" :class="{_borderbtm:isA}" @click="toggle1">{{elements[0].text}}</span>
        <span :id="elements[1].id" :class="{_borderbtm:isB}" @click="toggle2">{{elements[1].text}}</span>
        <span :id="elements[2].id" :class="{_borderbtm:isC}" @click="toggle3" >{{elements[2].text}}</span>
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