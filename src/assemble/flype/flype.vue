<template>
    <div class='_flype' :class='classObj' id='fold' v-on:mytap='tapped'>
        <slot></slot>
    </div>
</template>

<script>

    module.exports = {
        props: [ 'folded'],
        data: function() {
            var list = [];
            this.folded && list.push('_flype_slid_down');
            return {
                isFolded: this.folded,
                classObj: list
            };
        },
        methods: {
            tapped: function(){
                if(this.classObj[0] == '_flype_slid_down') {
                    this.classObj.pop(1);
                    
                } else {
                    this.classObj.push('_flype_slid_down');
                }
            }
        }
    }
</script>