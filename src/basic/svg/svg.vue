<template>
    <div class='_svg' :style='styleObj'><slot></slot></div>
</template>

<script>
    module.exports = {
        props: [ 'width', 'height' ],

        data: function () {
            var styleObj = {};
            
            this.width  && (styleObj.width  = this.width  + 'rem');
            this.height && (styleObj.height = this.height + 'rem');

            return {
                styleObj: styleObj
            };
        }
    }
</script> 