<template>
    <div class="_payway">  
        <div class="waylist" :id="item.id" v-for="(item, index) in elements">
            <span class="realradio" :class="{active: item.checked}"  @mytap='inputTab'>
                <b-icon name="radio-checked"></b-icon>
            </span> 
            <span>{{item.label}}</span> 
            <span class="next"> 
                {{item.value}}<b-icon v-if='item.link' name="angle-right-bold"></b-icon>
            </span>  
            <p v-if='item.comment'>{{item.comment}}</p>
        </div>  
        
    </div>
</template>

<script>
    var events = require('../../utils/gum.vue.events');
    module.exports = {
        data: function() {
            var slots = this.$slots.default,
            elems = [], options, children;

            var unchecked = true;

            slots.forEach(function (s) {
                options = s.componentOptions;
                if (options && options.propsData && options.propsData.id) {
                    elems.push({
                        id      : options.propsData.id,
                        label   : options.propsData.label,
                        comment : options.propsData.comment,
                        value   : options.propsData.value,
                        checked : options.propsData.checked === 'true',
                        link    : options.propsData.link === 'true'
                    });

                    if (options.propsData.checked === 'true') {
                        unchecked = false;
                    }
                }
            });

            // 若没有 checked 的项目，则默认第一条
            unchecked && elems[0] && (elems[0].checked = true);

            return {
                elements: elems
            };
        },

        methods: {
            inputTab: function (e){
                var el = e.target,
                    allSpan = document.querySelectorAll('.realradio');

                while(el && el.tagName !== 'DIV'){
                    el = el.parentNode;
                }

                for (var i = 0; i < allSpan.length; i ++){
                    allSpan[i].classList.remove('active');
                }
                
                el.firstChild.classList.add('active');

                this.$emit('input', el.lastChild);
            }
        }
    }
</script>
