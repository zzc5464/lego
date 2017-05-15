<template>
    <div class="_payway">  
        <div class="waylist" :id="item.id" v-for="(item, index) in elements">
            <span class="realradio" :class="{active: index=='0'}"  @click='inputTab'>
                <b-icon name="check"></b-icon>
            </span> 
            <span>{{item.type}}</span> 
            <span class="next" id="selectCard"> 
                {{item.bankName}} &nbsp; 尾号 {{item.bankNum}} <b-icon name="angle-right-bold"></b-icon>
            </span>  
        </div>  
        
    </div>
</template>

<script>
// <div class="waylist" :id="elements[0].id" v-for="item in elements">
//     <span class="realradio active" @click='inputTab'>
//         <b-icon name="check"></b-icon>
//     </span> 
//     <span>{{elements[0].type}}</span> 
//     <span class="next" id="selectCard"> 
//         {{elements[0].bankName}} &nbsp; 尾号 {{elements[0].bankNum}} <b-icon name="angle-right-bold"></b-icon>
//     </span>  
// </div>  
// <div class="waylist" :id="elements[1].id" v-if="elements.length==2 || elements.length==3">
//     <span class="realradio" @click='inputTab'>
//         <b-icon name="check"></b-icon>
//     </span> 
//     <span>{{elements[1].type}}</span> 
//     <span class="next" id="selectCard"> 
//         {{elements[1].bankName}} &nbsp; 尾号 {{elements[1].bankNum}} <b-icon name="angle-right-bold"></b-icon>
//     </span>  
// </div> 
// <div class="waylist" :id="elements[2].id" v-if="elements.length==3">
//     <span class="realradio" @click='inputTab'>
//         <b-icon name="check"></b-icon>
//     </span> 
//     <span>{{elements[2].type}}</span> 
//     <span class="next" id="selectCard"> 
//         {{elements[2].bankName}} &nbsp; 尾号 {{elements[2].bankNum}} <b-icon name="angle-right-bold"></b-icon>
//     </span>  
// </div>

    module.exports = {
        data: function() {
            var slots = this.$slots.default,
            elems = [], options, children;

            slots.forEach(function (s) {
                options = s.componentOptions;
                if (options && options.propsData && options.propsData.id) {
                    children = options.children;
                    if (children.length > 0 && typeof children[0].text !== 'undefined') {
                        elems.push({
                            id: options.propsData.id,
                            bankName: children[0].text,
                            type: options.propsData.type,
                            bankNum: options.propsData.bankNum,
                            checked: options.propsData.checked
                        });
                    }
                }
            });
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
            }
        }
    }
</script>
