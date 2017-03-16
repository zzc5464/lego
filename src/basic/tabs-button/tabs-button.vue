<template>
    <div class='_tab' >
        <button :class='classObj' :style='styleObj' v-on:mytap='tapped'><slot></slot></button>
        <button :class='classObj' :style='styleObj' v-on:mytap='tapped'><slot></slot></button>
    </div>
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
            }
        }
    }
</script>