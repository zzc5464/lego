<template>
    <button class='_tab_button' :class='classObj' :style='styleObj' v-on:mytap='tapped'><slot></slot></button>
</template>

<script>
    module.exports = {
        props: [ 'width', 'height', 'size', 'filled', 'position' ],

        data: function () {
            
            var obj = {}, 
            list = [];

            this.width  && (obj.width  = this.width  + 'rem');
            this.height && (obj.height = this.height + 'rem');

            
            this.filled === 'true'  && list.push('_button_filled');
            this.size               && list.push('_text_size_' + this.size + 'px');
            this.position           && list.push('_tab_button_' + this.position);
            

            return {
                styleObj: obj,
                classObj: list
            }
        },
        methods: {
            tapped: function(){
                // var self = this;
                // !(self.classObj.indexOf('_button_filled') < 0) ? self.classObj.splice(0,1) : self.classObj.push('_button_filled') ;
            }
        }
    }
</script>