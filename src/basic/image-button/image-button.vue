<template>
    <div class="_image_button" @click="tapping">
        <img class="_image_button_img" :style="obj" :src="src"><br>
        <txt :style="tobj" v-show="pos"><slot></slot></txt>
    </div>
</template>

<script>
    var child = require('../text/text.vue.js');
    module.exports = {
        props: [ 'width', 'height', 'filled', 'position', 'src', 'size', 'color'],
        data: function () {
            return {
                pos: this.position,
                sobj: {
                    width: (this.width || 4) + 'rem' ,
                    height: (this.height || 4) + 'rem'
                },
                obj: {
                    width: (this.width || 4) + 'rem' ,
                    height: (this.height || 4) + 'rem'
                },
                tobj: {
                    fontSize: (this.size || .75) + 'rem',
                    color: this.color || '#666'
                }
            };
        },
        methods: {
            tapping: function(){
                this.pos = !this.pos;
                
            }
        },
        components: {
            'txt': child
        }
    }
</script>