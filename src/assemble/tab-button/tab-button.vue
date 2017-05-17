<template>
    <div v-if="elements.length === 2" class="_ruletab _ruletab1" >
        <span :id="elements[0].id" @click="tabswitch" class="_borderbtm" >{{elements[0].text}}</span>
        <span :id="elements[1].id" @click="tabswitch" >{{elements[1].text}}</span>
    </div> 
    <div v-else class="_ruletab _ruletab2">
        <span :id="elements[0].id" class="_borderbtm" @click="tabswitch">{{elements[0].text}}</span>
        <span :id="elements[1].id" @click="tabswitch">{{elements[1].text}}</span>
        <span :id="elements[2].id" @click="tabswitch" >{{elements[2].text}}</span>
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
                elements: elems
            }
        },
        methods: {
            tabswitch: function (e) {
                var sbilings = this.$el.children;
                for(var i=0;i<sbilings.length;i++) {
                    sbilings[i].classList.remove('_borderbtm');
                }
              
                e.target.classList.add('_borderbtm');
            }
        }
    }
</script>